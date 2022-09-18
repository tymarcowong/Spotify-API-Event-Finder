require("dotenv").config();

const express = require("express");
const router = express.Router();
const axios = require("axios");
const paramsToString = require("../utils/paramsToString");

// routes
const spotifyURL = {
  token: "https://accounts.spotify.com/api/token",
  api: "https://api.spotify.com",
};

// keys
const spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
};

const ticketMaster = { key: process.env.TM_KEY };

const CLIENT_URL = `http://${process.env.URL}:3000`;

const REDIRECT_URI = `http://${process.env.URL}:5000/api/callback`;
router.get("/login", (req, res) => {
  let scope =
    "user-read-private user-read-email user-read-recently-played playlist-read-collaborative user-top-read";

  const params = paramsToString({
    response_type: "code",
    client_id: spotify.id,
    scope: scope,
    redirect_uri: REDIRECT_URI,
  });

  res.redirect("https://accounts.spotify.com/authorize?" + params);
});

router.get("/callBack", (req, res) => {
  const code = req.query.code || null;

  const data = paramsToString({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: REDIRECT_URI,
  });

  const header = {
    headers: {
      Authorization: `Basic ${new Buffer.from(
        `${spotify.id}:${spotify.secret}`
      ).toString("base64")}`,
    },
  };

  axios
    .post(spotifyURL.token, data, header)
    .then((response) => {
      const expiresAt = Date.now() + response.data.expires_in * 1000; // converts expires_in value from seconds to miliseconds
      res.redirect(
        `${CLIENT_URL}/?access_token=${response.data.access_token}&expires_at=${expiresAt}`
      );
    })
    .catch((err) => console.log(err));
});

router.get("/profile", (req, res) => {
  const accessToken = req.query.accessToken;

  const endpoint = "/v1/me";
  const url = spotifyURL.api + endpoint;

  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      res.json({
        image: data.images[0].url,
        followers: data.followers.total,
        spotifyUrl: data.external_urls.spotify,
        name: data.display_name,
        country: data.country,
      });
    });
});

router.post("/topArtists", (req, res) => {
  const accessToken = req.body.accessToken;

  const endpoint = "/v1/me/top/artists";
  const url = spotifyURL.api + endpoint;

  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((result) => {
      let out = [];
      result.data.items.map((artist) => {
        out.push({
          name: artist.name,
          url: artist.external_urls.spotify,
          id: artist.id,
          image: artist.images[0].url,
        });
      });
      res.json(out);
    })
    .catch((e) => {
      console.log(e);
    });
});

// display events of n artists
const findEventArtistCount = 5;

router.get("/findEvents", (req, res) => {
  const accessToken = req.query.accessToken;

  const endpoint = `/v1/me/top/artists?limit=${findEventArtistCount}`;
  const url = spotifyURL.api + endpoint;

  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((result) => {
      let out = [];
      result.data.items.map((artist) => {
        out.push(artist.name);
      });
      return out;
    })
    .then((artists) => {
      let out = [];

      let artist = artists[1];
      const query = artist.replace(" ", "%20");
      const url = `https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=${ticketMaster.key}&keyword=${query}`;

      axios
        .get(url)
        .then((result) => {
          // console.log(result.data._embedded.events[0]);
          // console.log("location-----------------------");
          // console.log(result.data._embedded.events[0]._embedded.venues[0].name);
          // console.log(
          //   result.data._embedded.events[0]._embedded.venues[0].location
          // );
          res.json({
            location: {
              name: result.data._embedded.events[0]._embedded.venues[0].name,
              coords: {
                lat: result.data._embedded.events[0]._embedded.venues[0]
                  .location.latitude,
                lng: result.data._embedded.events[0]._embedded.venues[0]
                  .location.longitude,
              },
            },
          });
        })
        .catch((e) => {
          console.log("error");
        });
    })
    // .then((artists) => {
    //
    //   artists.map((artist) => {
    //     console.log(artist.name);
    //     const query = artist.name.replace(" ", "%20");
    //     const url = `https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=${ticketMaster.key}&keyword=${query}`;
    //     console.log(url);
    //     // axios.get(url).then((result) => {
    //     //   out.push(result);
    //     // });
    //   });
    //   res.json(out);
    // })
    .catch((e) => {
      console.error(e);
    });
});

module.exports = router;

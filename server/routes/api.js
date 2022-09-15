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

router.get("/login", (req, res) => {
  let scope =
    "user-read-private user-read-email user-read-recently-played playlist-read-collaborative user-top-read";

  const params = paramsToString({
    response_type: "code",
    client_id: spotify.id,
    scope: scope,
    redirect_uri: "http://localhost:3000",
  });

  res.redirect("https://accounts.spotify.com/authorize?" + params);
});

router.post("/getToken", (req, res) => {
  const code = req.body.code;

  const data = paramsToString({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: "http://localhost:3000",
  });

  const header = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(spotify.id + ":" + spotify.secret)}`,
    },
  };

  axios
    .post(spotifyURL.token, data, header)
    .then((result) => {
      const expires_in = result.data.expires_in;
      const expires_at = Date.now() + expires_in;

      res.json({
        access_token: result.data.access_token,
        refresh_token: result.data.refresh_token,
        expires_at: expires_at,
      });
    })
    .catch(() => res.sendStatus(400));
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

router.get("/findEvents", (req, res) => {
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=${ticketMaster.key}&keyword=ariana%20grande`;
  axios.get(url).then((result) => {
    let out = [];
    res.json(result.data);
  });
});

router.get("/", (req, res) => {
  res.json({
    user: ["FortnitePogger69", "Marco", "Michael Yackson", "Yimmy cockson"],
  });
});

module.exports = router;

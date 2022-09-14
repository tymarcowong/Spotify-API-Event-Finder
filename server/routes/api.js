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

const spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
};

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

router.get("/test", (req, res) => {
  axios(
    "http://www.omdbapi.com/?&apikey=f3f82f16&i=tt1285016&plot=full&r=json&callback="
  ).then((resp) => console.log(resp));
});

router.post("/topArtists", (req, res) => {
  const accessToken = req.body.accessToken;

  // const endpoint = "/v1/me/top/artists";
  const endpoint = "/me";
  const url = spotifyURL.api + endpoint;

  console.log(accessToken);

  axios(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((result) => {
    console.log(result);
  });
});

router.get("/", (req, res) => {
  res.json({
    user: ["FortnitePogger69", "Marco", "Michael Yackson", "Yimmy cockson"],
  });
});

module.exports = router;

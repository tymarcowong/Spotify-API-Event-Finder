require("dotenv").config();

const express = require("express");
const router = express.Router();
const axios = require("axios");
const paramsToString = require("../utils/paramsToString");

// routes
const URL_SPOTIFY = {
  token: "https://accounts.spotify.com/api/token",
};

const spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
};

router.get("/getToken", (req, res) => {
  const code =
    "AQCJ-Nut0uqLAyNE5iNBJ2KgW08fNYO6alAGWHklycUDdLd1GHp7UyO6Dd6wP95mlnayDvbWwdIuQGZkvC_HNGWGeNkyd2DEF6hJv4pcAx_WszLyUlu07EqE2BvuN6fT7n7CD5Wz6De_-6TWChhKMZmo864DTBdZHnk8eS3UMoE-JoxusjuFNP-P5BSI0in35S-shZHVz9BBcDygcA";
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
    .post(URL_SPOTIFY.token, data, header)
    .then((result) => {
      const expires_in = result.data.expires_in;
      const expires_at = Date.now() + expires_in;

      res.json({
        access_token: result.data.access_token,
        refresh_token: result.data.refresh_token,
        expires_at: expires_at,
      });
    })
    .catch((e) => console.error(e));
});

router.get("/login", (req, res) => {
  let scope = "user-read-private user-read-email";

  const params = paramsToString({
    response_type: "code",
    client_id: spotify.id,
    scope: scope,
    redirect_uri: "http://localhost:3000",
  });

  res.redirect("https://accounts.spotify.com/authorize?" + params);
});

router.get("/", (req, res) => {
  res.json({
    user: ["FortnitePogger69", "Marco", "Michael Yackson", "Yimmy cockson"],
  });
});

module.exports = router;

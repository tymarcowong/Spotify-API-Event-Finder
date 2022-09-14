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
    "AQDaJbuBaE2rd_SSEgFOiyN1WPnjFCWL6tocGcUy2VoDcUL6FarrOUnTERbCibTmiM6srtRrT6auJzDTnx7ZhHSCVwh-DP6O0WJh26cYSQmFhGPf6WFt5i6LnLS8XXcXglYYISyU-JaRVWnmRX2QSl3pdeYB3Fu2mcsa5dJP5Rfzn175vyT4HLI2TbTUckBvPs20rBsYrZbQGM1COw";

  const dataString = paramsToString({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: "http://localhost:3000",
  });

  axios
    .post(URL_SPOTIFY.token, dataString, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(spotify.id + ":" + spotify.secret)}`,
      },
    })
    .then((result) => {
      res.json({
        access_token: result.data.access_token,
        token_type: result.data.token_type,
        expires_in: result.data.expires_in,
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

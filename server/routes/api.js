require("dotenv").config();

const express = require("express");
const router = express.Router();
const axios = require("axios");
const querystring = require("querystring");

// routes
const URL_SPOTIFY = {
  token: "https://accounts.spotify.com/api/token",
};

const spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
};

router.get("/getToken", (req, res) => {
  const authOptions = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(spotify.id + ":" + spotify.secret)}`,
    },
    data: `grant_type=client_credentials`,
  };

  const code =
    "AQCSfLDEMo8Wq4tG4a4A7F_V6zjGCQJRwqcGJ6-Tjeq5p_vmCW4SOwTwo9fbrp-wChEJbnVy3lKJZWMKMUMRuiycJ6txt1j16BlVRUpbpCoiZcMq1HWk2qbXmGOWdZGgRfklUJcNT9ZgfE8w5XTZETKq9QtO-Mcl5CZpRDZuZrKRSsrW13CrYnrV5fedGI3IBqyZupcgcC9hm6fmFQ";

  axios
    .post(
      URL_SPOTIFY.token,
      querystring.stringify({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "http://localhost:3000",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(spotify.id + ":" + spotify.secret)}`,
        },
      }
    )
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

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: spotify.id,
        scope: scope,
        redirect_uri: "http://localhost:3000",
      })
  );
});

router.get("/", (req, res) => {
  res.json({
    user: ["FortnitePogger69", "Marco", "Michael Yackson", "Yimmy cockson"],
  });
});

module.exports = router;

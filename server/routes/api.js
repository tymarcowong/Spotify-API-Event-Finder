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

// router.get("/getToken", (req, res) => {
//   const authOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization: `Basic ${btoa(spotify.id + ":" + spotify.secret)}`,
//     },
//     data: `grant_type=client_credentials`,
//   };
//   axios(URL_SPOTIFY.token, authOptions)
//     .then((result) => {
//       res.json({
//         access_token: result.data.access_token,
//         token_type: result.data.token_type,
//         expires_in: result.data.expires_in,
//       });
//     })
//     .catch((e) => console.error(e));
// });

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

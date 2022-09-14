const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/pog", (req, res) => {
  res.json({
    user: ["FortnitePogger69"],
  });
});

router.get("/", (req, res) => {
  res.json({
    user: ["FortnitePogger69", "Marco", "Michael Yackson"],
  });
});

module.exports = router;

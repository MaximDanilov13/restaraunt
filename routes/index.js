"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", { title: "Main | thirteen", name: "index" });
});

module.exports = router;

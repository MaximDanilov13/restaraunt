"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("menu", { title: "Menu | thirtten", name: "menu" });
});

module.exports = router;

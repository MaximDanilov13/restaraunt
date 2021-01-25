"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("information", { title: "Information | thirtten", name: "information" });
});

module.exports = router;

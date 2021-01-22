"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("contacts", { title: "Contacts | thirtten", name: "contacts" });
});

module.exports = router;

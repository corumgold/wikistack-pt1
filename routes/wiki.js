const express = require("express");
const router = express.Router();
const viewsIndex = require("../views/index");
const { Page } = require("../models");

router.get("/", (req, res, next) => {
  try {
    res.send("wiki page");
  } catch (err) {
    next(err);
  }
});

router.get("/add", (req, res, next) => {
  try {
    res.send(viewsIndex.addPage());
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
    });

    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

module.exports = router;

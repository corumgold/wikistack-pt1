const express = require("express");
const router = express.Router();
const viewsIndex = require("../views/index");

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

router.post("/", (req, res, next) => {
  try {
    res.send("Got to post!");
  } catch (err) {
    next(err);
  }
});

module.exports = router;

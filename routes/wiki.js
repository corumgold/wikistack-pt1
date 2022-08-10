const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    try {
        res.send('wiki page');
    }
    catch (err) { next(err) }
});

router.get("/add", (req, res, next) => {
    try {
        res.send('add page');
    }
    catch (err) { next(err) }
});

router.post("/", (req, res, next) => {
    try {
        res.send('Got to post!');
    }
    catch (err) { next(err) }
})

module.exports = router;

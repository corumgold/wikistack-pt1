const express = require("express");
const app = express();
const morgan = require("morgan");
const index = require("./views/index");

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send(index.main());
})

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send('Hello world');
})

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

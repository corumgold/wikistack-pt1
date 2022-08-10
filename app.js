const express = require("express");
const app = express();
const morgan = require("morgan");
const index = require("./views/index");
const { db, Page, User } = require("./models");


app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const usersRouter = require("./routes/users");
const wikiRouter = require("./routes/wiki");
app.use('/users', usersRouter);
app.use('/wiki', wikiRouter);

db.authenticate()
    .then(() => {
        console.log('connected to the database');
    })

app.get("/", (req, res) => {
    res.send(index.main());
})

const init = async () => {
    await db.sync({force: true});

    const port = 3000;
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    })
}
init();

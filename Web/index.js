require("marko/node-require");
const path = require("path");
const markoExpress = require("marko/express");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const helmet = require("helmet");

const NetworkGame = require("./network/NetworkGame");

const createdRooms = [];

const templates = {
    index: require("./templates/index"),
    match: require("./templates/match")
};

app.use(helmet());
app.use(markoExpress());
app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/build", express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
    res.marko(templates.index, {});
});

app.get("/invite/:code", (req, res) => {
    if (!createdRooms.includes(req.params.code)) {
        createdRooms.push(req.params.code);
        const nsp = io.of(`/${req.params.code}`);
        const game = new NetworkGame(nsp, req.params.code, createdRooms);
    }
    res.marko(templates.match, {
        gameCode: req.params.code
    });
});

app.use((req, res) => {
    res.redirect("/");
});

server.listen(8000);
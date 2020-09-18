const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const postsRoutes = require("./routes/postRoutes");

const publicDirectortPath = path.join(__dirname, "./public");

app.set("view engine", "ejs");
app.use(bodyParser());
app.use(express.static(publicDirectortPath));

app.use("/post", postsRoutes);

module.exports = app;

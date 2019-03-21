var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

var orm = require("./config/orm.js");

orm.selectAndOrder("burger_name", "burgers", "id");
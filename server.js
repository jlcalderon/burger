const express = require("express");
const favicon = require('serve-favicon');
const path = require('path');
const PORT = process.env.PORT || 8010;

//Initializing the app variable
const app = express();
//ading favicon from npm package
app.use(favicon(path.join(__dirname, 'public', 'assets', 'img', 'favicon.ico')));
//Set up the server static path src
app.use(express.static("src"));
//Set up the server static html files that are going to be served
app.use(express.static("public"));
//Set up the responses format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set up the render views with express handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log(`Application listening on port: ${PORT} open the app clicking on: http://localhost:${PORT}`);
});
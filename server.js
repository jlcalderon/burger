const express = require("express");

//Initializing the app variable
const app = express();
const PORT = process.env.PORT || 8010;

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
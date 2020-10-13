const express = require("express");

//Initializing the app variable
const app = express();
const PORT = process.env.PORT || 8080;

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

/* Migrate all code below to the burgers_controller.js */

/* API's server routes */
/* Get all burgers */
/* app.get("/api/burgers", function(req, res) {

}); */

/* Get burgers recently added to the menu awaiting to be devoured*/
/* app.get("/api/burgers/awaiting", function(req, res) {

}); */

/* Get burgers recently devoured*/
/* app.get("/api/burgers/devoured", function(req, res) {

}); */

/* Send a post request to Create a new burger  */
/* app.post("/api/burgers", function(req, res) {
    let newBurger = req.body;
}); */

/* Updates a burger status */
/* app.put("/api/burgers:id", function(req, res) {
    const burgerID = req.params.id;
}); */


// Starts the server to begin listening
app.listen(PORT, function() {
    console.log(`Application listening on port: ${PORT} open the app clicking on: http://localhost:${PORT}`);
});
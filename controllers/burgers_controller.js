/* import express package */
const express = require("Express");
/* import the burger model */
const burger = require("../models/burger.js");
/* Middleware Router of express */
const router = express.Router();

/* HTML static files routes */
/* Display main index page with the data fetched from the database*/
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//MORE routes comming up here...

// Export routes for server.js to use.
module.exports = router;
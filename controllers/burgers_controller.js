/* import express package */
const { Router } = require("Express");
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


/* Update the burger status */
router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

/* Add a new burger to waiting list */
router.post("/api/burgers", function(req, res) {

    burger.insertOne(
        ["name", "devoured"], [req.body.name, req.body.devoured],
        function(result) {
            res.json({ id: result.insertId });
        }
    );
});

// Export routes for server.js to use.
module.exports = router;
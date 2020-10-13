const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.log(`Error connecting to: ${err.stack}`);
        return;
    }
    console.log(`Connected to database: ${connection.database} as id ${connection.threadId} `);
});

module.exports = connection;
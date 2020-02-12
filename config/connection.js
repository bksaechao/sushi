var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "N3wp@55word1424",
    database: "sushi_db"
});

connection.connect( (err) => {
    if (err) {
        return console.error("error connecting: " + err.message);
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
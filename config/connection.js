// Set up MySQL connection.
var mysql = require("mysql");
var Sequelize = require("sequelize");


// old connection code:
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "burgers_db"
// });
// var connection;

if(process.env.JAWSDB_URL){
  console.log("going to the internet.")
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log ("going local");
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
};
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

var sequelize = new Sequelize("burgers10_db", "root", "password", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;

//module.exports = connection;

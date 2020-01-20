// Set up MySQL connection.
var mysql = require("mysql");

// old connection code:
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "burgers_db"
// });
var connection;

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

//Maybe the below?
// app.get('/',(req,res)=>{
//   // will serve tables page
//   res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
// })

// Export connection for our ORM to use.


module.exports = connection;


// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
// var kitchen =require("../controllers/burgerController.js")

// var burger = {
//   all: function(cb) {
//     kitchen.findAll("kitchen", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cb) {
//     orm.create("kitchen", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("kitchen", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
  
//   delete: function(id, cb) {
//     orm.delete("kitchen", id, function(res) {
//       cb(res);
//     });
//   }

// };


// Creates a "Character" model that matches up with DB
var burger = sequelize.define("burger", {
  
  //id: Sequelize.INTEGER,  
  name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN
  
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

// Syncs with DB
burger.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = burger;








// Export the database functions for the controller (burger8000Controller.js).
module.exports = burger;

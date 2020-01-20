var express = require("express");
var burger = require("../models/burger.js")

var router = express.Router();

router.get("/", function(req, res) {
  burger.findAll({raw:true}).then(function(data){

    var hbsObject = {
      kitchen: data
    };
    res.render("index", hbsObject);
  });

});

router.post("/api/burger8000", function(req, res) {
  burger.create({
    name: req.body.name,
    devoured: req.body.devoured
  }).then( function(result) {
    res.json(result.toJSON()); 
    // result = result.get({plain:true})
    // res.json({ id: result.id});
  });
});

router.put("/api/burger8000/:id", function(req, res) {
  // var condition = "id = " + req.params.id;
  burger.update(
    {
      devoured: req.body.devoured
    },
    {
      where :{
        id: req.params.id
      }
    }
    ).then(function(result){
      res.status(200).end();
    }).catch(function(err){
      res.status(404).end()
    });
});


router.delete("/api/burger8000/:id", function(req, res) {
  console.log("router.delete")
  console.log(req.params);
  
  burger.destroy({
    where:{
      id: Number(req.params.id)
    }
  }).then(function(result){
    res.status(200).end();
  }).catch(function(err){
    res.status(404).end()
  })
});



module.exports = router;

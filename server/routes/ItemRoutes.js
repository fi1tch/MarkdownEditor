// itemRoutes.js

var express = require('express');
var app = express();
var itemRoutes = express.Router();

// Require Item model in our routes module
var Item = require('../models/Item');

// Defined store route
itemRoutes.route('/add').post(function (req, res) {
  var item = new Item(req.body);
    item.save()
    .then(item => {
      res.status(200).json({'item': 'Item added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
itemRoutes.route('/').get(function (req, res) {
  Item.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Defined edit route
itemRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item){
      res.json(item);
  });
});

module.exports = itemRoutes;
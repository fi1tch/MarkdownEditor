const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var mongoose = require('mongoose');



const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


mongoose.connect('mongodb://localhost:27017/local');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

var Item = require("../models/item");

app.post('/items', (req, res) => {

  var db = req.db;
  
  var text = req.body.text;

  var new_item = new Item ({
    
    text: text

  
})

new_item.save(function (error){
  if (error){
    console.log(error)
  }
  res.send({
    success: true,
    message: 'Post saved successfully!'
  })
})
})

app.get('/items', (req, res) => {
  Item.find({}, 'title description', function (error, items) {
    if (error) { console.error(error); }
    res.send({
      items: items
    })
  }).sort({_id:-1})
})

app.listen(process.env.PORT || 8081)
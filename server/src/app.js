const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var mongoose = require('mongoose');
config = require('./config/DB');

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var Item = require("../models/item");


mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

  app.get('/posts', (req, res) => {
    Item.find({}, 'title description', function (error, posts) {
      if (error) { console.error(error); }
      res.send({
        posts: posts
      })
    }).sort({_id:-1})
  })

app.post('/posts', (req, res) => {
    var db = req.db;
    var name = req.body.name;
    var text = req.body.text;
    var new_item = new Item({
      name: name,
      text: text
    })
  
    new_item.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Post saved successfully!'
      })
    })
  })

app.listen(process.env.PORT || 8081)
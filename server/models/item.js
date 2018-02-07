var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema({
 
  text: String
  
});

var Item = mongoose.model('Item', Item);
module.exports = Item;
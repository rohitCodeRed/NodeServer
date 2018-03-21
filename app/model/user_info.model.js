var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
  id : Number,
  name:String
  
});

//var customer = mongoose.model('customer', userSchema);
module.exports = mongoose.model('users', userSchema);

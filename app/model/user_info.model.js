var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
  username : String,
  email :String,
  password:String,
  created_on: {type:Date, default:Date.now()}
});

//var customer = mongoose.model('customer', userSchema);
module.exports = mongoose.model('users', userSchema);

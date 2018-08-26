var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
  id : Number,
  name:String,
  username:String,
  password:String,
  loggedIn:Boolean,
  onCreated:{ type: Date, default: Date.now }

});

//var customer = mongoose.model('customer', userSchema);
module.exports = mongoose.model('users', userSchema);

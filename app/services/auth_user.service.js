const users = require('../model/user_info.model');
const acess_token = require('./acess_token.service');
const authPromise = require('promise');
const service_auth_user = {};

service_auth_user.authBytoken = authBytoken;


function authBytoken(token){

  var Id = acess_token.getAuthUserId(token);
  users.find({"_id":Id},function(err,result){
    if(err && !result){
      return authPromise.reject(new Error(err));;
    }
    return authPromise.resolve(Id);
  });
  return authPromise;
}




module.exports = service_auth_user;

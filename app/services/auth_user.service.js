const users = require('../model/user_info.model');
const acess_token = require('./acess_token.service');
const authPromise = require('promise');
const service_auth_user = {};

service_auth_user.authBytoken = authBytoken;


function authBytoken(token){

  acess_token.getAuthUserId(token).then(function(authUserId){
    authPromise.resolve(authUserId);
  }).catch(function(err){
    authPromise.reject(new Error(err));
  });

  return authPromise;
}

module.exports = service_auth_user;

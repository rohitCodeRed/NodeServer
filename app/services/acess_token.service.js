var users = require('../model/user_info.model');

const service_acess_token = {};

service_acess_token.getAcessToken = getAcessToken;
service_acess_token.verifyToken = verifyToken;
service_acess_token.getAuthUserId = getAuthUserId;

function getAcessToken(info){
 //.....
}

function verifyToken(token){
  //.....
}

function getAuthUserId(token){
  if(verifyToken(token)){
    return "";
  }
  return "";
}



module.exports = service_acess_token;

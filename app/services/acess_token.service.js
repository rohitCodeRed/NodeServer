const users = require('../model/user_info.model');
const crypto = require('crypto');
const { privateKey } = require('../../config.js');
const jwt = require('jsonwebtoken');
const service_acess_token = {};
const decodePromise = require('promise');
const authIdPromise = require('promise');

service_acess_token.getAcessToken = getHashToken;
service_acess_token.verifyToken = verifyJwtToken;
service_acess_token.getAuthUserId = getAuthUserId;
service_acess_token.getJwtToken = getJwtToken;


function getHashToken(password){
 //.....
 let hash = crypto.createHash('md5').update(password).digest('hex');
 return hash;
}

function getJwtToken(token){
  let jwtToken = jwt.sign(token, privateKey, { expiresIn:"7d"});
  return jwtToken;
}

function verifyJwtToken(token){
  //.....

    jwt.verify(token,privateKey,function(err,result){
      if(!err){
         decodePromise.resolve(result);
      }
      else{
        decodePromise.reject(new Error(err));
      }
    });
  return decodePromise;
}

function getAuthUserId(token){

  verifyJwtToken(token).then(function(data){

    users.findOne({"token":data},function(err,result){
      if(err){
        authIdPromise.reject(new Error(err));
      }
      else if(!result){
        authIdPromise.reject(new Error("Unable to find User."));
      }
      else{
        authIdPromise.resolve(result._id);
      }

    });

  }).catch(function(err){
      authIdPromise.reject(new Error(err));
  });
  
  return authIdPromise;
}



module.exports = service_acess_token;

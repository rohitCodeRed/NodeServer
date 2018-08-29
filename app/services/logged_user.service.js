const users = require('../model/user_info.model');
const loggedInPromise = require('promise');
const loggedOutPromise = require('promise');
const registerPromise = require('promise');
const logged_user = {};
const acess_token = require('./acess_token.service');

logged_user.resgister = resgister;
logged_user.loggedIn = loggedIn;
logged_user.loggedOut = loggedOut;


function resgister(data){
  const createUser = new users(data);
  createUser.save(err => {
    if (err) return registerPromise.reject(new Error(err));
    return registerPromise.resolve({"username":createUser.username,"nickname":createUser.nickname,"onCreated":createUser.onCreated});
  });
  return registerPromise;
}

function loggedIn(username,password){
  var hashPass = acess_token.getHashToken(password);

  users.findOne({"username":username,"password":hashPass},function(err,result){
    if(result){
        users.findByIdAndUpdate(result._id,{"loggedIn":true},{new: true},(err, todo) => {
          // Handle any possible database errors
          if (err){
            loggedInPromise.reject(new Error(err));
          }
          else{
            let jwtToken = acess_token.getJwtToken(result.token);
            loggedInPromise.resolve(jwtToken);
          }
        });
        //loggedPromise.resolve(jwtToken);
      }
      else if(err){
        loggedInPromise.reject(new Error(err));
      }

  });
  return loggedInPromise;
}

function loggedOut(authUserId){
  users.findByIdAndUpdate(authUserId,{"loggedIn":false},{new: true},(err, todo) => {
// Handle any possible database errors
    if (err){
      loggedOutPromise.reject(new Error(err));
    }
    else{
      loggedOutPromise.resolve(true);
    }

  });
  return loggedOutPromise;
}

module.exports = logged_user;

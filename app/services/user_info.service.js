var mongoose = require('mongoose');
var Q = require('q');
var users = require('../model/user_info.model');
var service_user ={};


service_user.getInfo = getInformation;


module.exports = service_user;

function getInformation(){
  var deferred = Q.defer();

  users.find({},function(err,result){
    if(err){
      return deferred.reject(new Error(err));;
    }
    return deferred.resolve(result);;
  });

  return deferred.promise;


}

//var mongoose = require('mongoose');
var Q = require('q');
var users = require('../model/user_info.model');
var service_user ={};


service_user.getInfo = getInfo;


module.exports = service_user;

function getListUser(){
  var deferred = Q.defer();

  users.find({},function(err,result){
    if(err){
      return deferred.reject(new Error(err));;
    }
    return deferred.resolve(result);;
  });

  return deferred.promise;
}

function getInfo(id){

}

function createUser(){

}

function updateUser(id,data){

}

function deleteUser(id){

}

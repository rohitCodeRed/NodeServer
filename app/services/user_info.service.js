//var mongoose = require('mongoose');
//var Q = require('q');
const userListPromise = require('promise');
const users = require('../model/user_info.model');
const service_user ={};


service_user.getListUser = getListUser;
service_user.getInfo = getInfo;
service_user.createUser = createUser;
service_user.updateUser = updateUser;
service_user.deleteUser = deleteUser;



function getListUser(){

  users.find({},function(err,result){
    if(err){
      return userListPromise.reject(new Error(err));
    }
    return userListPromise.resolve(result);
  });

  return userListPromise;
}

function getInfo(id){

}

function createUser(){

}

function updateUser(id,data){

}

function deleteUser(id){

}

module.exports = service_user;

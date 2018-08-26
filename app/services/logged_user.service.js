const users = require('../model/user_info.model');
const authPromise = require('promise');
const logged_user = {};
const acess_token = require('./acess_token.service');

logged_user.resgister = resgister;
logged_user.loggedIn = loggedIn;
logged_user.loggedOut = loggedOut;


function resgister(data){

}

function loggedIn(username,password){

}

function loggedOut(data){

}



module.exports = logged_user;

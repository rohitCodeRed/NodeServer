const express = require('express');
const router = express.Router();
const stringify = require('json-stringify');
const logged_user = require('../services/logged_user.service');
const service_auth_user = require('../services/auth_user.service');
const async = require('asyncawait/async');
const await = require('asyncawait/await');

// middleware to authenticate the loggedIn User..

var middleware = async (function (req,res,next) {
  try{
    let  userId = await (service_auth_user.authBytoken(req.get("token")));
    console.log(stringify(req.path));
    req.data.authUserId = userId;
    next();
  }
  catch(e){
    res.sendStatus(401);
  }

   //return data;
});


router.get('/user/loggedIn',function(req, res) {

  logged_user.loggedIn(req.get("username"),req.get('password')).then(function(result){
      if(result){
        console.log(result);
        res.send(result);
      }else{
        res.status(400).send("Unable to loggedIn user");
      }
    }).catch(function(err){
      res.sendStatus(400);
    });

});

router.get('/user/loggedOut',middleware,function(req, res) {

  logged_user.loggedOut(req.data.authUserId).then(function(result){
      if(result){
        console.log(result);
        res.send(result);
      }else{
        res.status(400).send("Unable to loggedOut user");
      }
    }).catch(function(err){
      res.sendStatus(400);
    });

});

router.get('/user/register',function(req, res) {

  logged_user.resgister(req.data).then(function(result){
      if(result){
        console.log(result);
        res.send(result);
      }else{
        res.status(400).send("Unable to register user");
      }
    }).catch(function(err){
      res.sendStatus(400);
    });

});

module.exports = router;

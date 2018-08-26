const express = require('express');
const request = require('request');
//var rp = require('request-promise');
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const stringify = require('json-stringify');
const router = express.Router();
const service_user =  require('../services/user_info.service');     // get an instance of the express Router
const auth_user = require('../services/auth_user.service');


// middleware to authenticate the loggedIn User..

const middleware = async (function (req,res,next) {
  try{
    let  userId = await auth_user.authBytoken(req.get("token"));
    console.log(stringify(req.path));
    req.data.authUserId = userId;
    next();
  }
  catch(e){
    res.sendStatus(401);
  }

   //return data;
});


router.get('/user/list',middleware,function(req, res) {

  service_user.getInfo().then(function(result){
      if(result){
        console.log(result);
        res.send(result);
      }else{
        res.status(400).send("Unable to list user");
      }
    }).catch(function(err){
      res.sendStatus(400);
    });

});

router.get('/user/:id',middleware,function(req, res) {

  service_user.getInfo().then(function(result){
      if(result){
        console.log(result);
        res.send(result);
      }else{
        res.status(400).send("Unable to find user");
      }
    }).catch(function(err){
      res.sendStatus(400);
    });

});

router.post('/user',middleware,function(req,res){

  console.log(req.body);
  service_user.createUser().then(function(result){
      if(result){
        console.log(result);
        res.send(result);
      }else{
        res.status(400).send("Unable to create user");
      }
    }).catch(function(err){
      res.sendStatus(400);
    });
});


router.put('/user/:id',middleware,function(req,res){
  service_user.updateUser().then(function(result){
      if(result){
        console.log(result);
        res.send(result);
      }else{
        res.status(400).send("Unable to update user");
      }
    }).catch(function(err){
      res.sendStatus(400);
    });
});

router.delete('/user/:id',middleware,function(req,res){
  service_user.deleteUser().then(function(result){
      if(result){
        console.log(result);
        res.send(result);
      }else{
        res.status(400).send("Unable to delete user");
      }
    }).catch(function(err){
      res.sendStatus(400);
    });
});
/*router.get('/user/:custId/plan', function(req, res) {
//console.log("name: "+req.params.name);
  service_user.getInfo(req.params.custId).then(function(data){
    if(data){
      res.send(data);
    }else{
      res.status(400).send("Unable to find data");
    }
  }).catch(function(err){
    res.sendStatus(400);
  });

});*/

module.exports = router;

const express = require('express');
const request = require('request');
//var rp = require('request-promise');
//var async = require('asyncawait/async');
//var await = require('asyncawait/await');
const stringify = require('json-stringify');
const router = express.Router();
const service_user =  require('../services/user_info.service');     // get an instance of the express Router

// middleware to use for all requests
// var options = {
//   uri: 'http://ff8f82c0.ngrok.io/api/response',
//   headers: {
//       'User-Agent': 'Request-Promise'
//   },
//   json: true // Automatically parses the JSON string in the response
// };
//
// var asynData = async (function (req,res,next) {
//     var  data = await (rp(options));
//     //var
//     console.log(stringify(req.path));
//     req.data = data
//     next();
//    //return data;
// });

router.get('/users',function(req, res) {

service_user.getInfo().then(function(result){
    if(result){
      console.log(result);
      res.send(result);
    }else{
      res.status(400).send("Unable to find data");
    }
  }).catch(function(err){
    res.sendStatus(400);
  });

});

router.post('/user',function(req,res){

  console.log(req.body);
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

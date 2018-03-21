const express = require('express');
const app = express();
var stringify = require('json-stringify');
//var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var methodOverride = require('method-override');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static(__dirname + '/public'));
app.set(port);

mongoose.connect('mongodb://localhost:27017/angularNode',{ useMongoClient:true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api', require('./app/api/user_api'));

app.get('/', function(req, res) {
  res.send("Hello world"); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(port, function(){
  console.log('Example app listening on port: '+port);
});

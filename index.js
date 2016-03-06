var express = require('express');
var mongoose = require('mongoose');

var fs = require('fs');
var app = express();
var apiRouter = require('./routes');

var db = mongoose.connect('mongodb://127.0.0.1:27017');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', apiRouter);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
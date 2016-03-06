var express = require('express');
var apiRouter = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var Test = require('./models/testModel.js');

apiRouter.use(jsonParser);

apiRouter.route('/add')
    .post(function(req, res){
        var reqKeys = Object.keys(req.body);
        var modelKeys = Object.keys(req.body);
        var obj = {};
        reqKeys.forEach(function(key, i, coll){
            if (modelKeys.indexOf(key) !== -1){
                // If they match sace the request body to the database.
                obj[key] = req.body[key]; 
            }
            if (i === coll.length - 1) {
                var test1 = new Test(obj);
                test1.save(function(err){
                    if (err)  throw err;
                    res.status(200).send('saved');
                });
            }
        });
    });

apiRouter.route('/graph')
    .get(function(req, res){
        var today = new Date().getDate();
        Test.find({})
    });

apiRouter.route('/index')
    .get(function(req, res){
        Test.find({}, function(err, scene) {
            if (err) throw err;
          // object of all the scene
          res.status(200).json(scene);
        });
    });


module.exports = apiRouter;

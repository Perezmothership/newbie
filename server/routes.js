'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');
var fs = require('fs');

var databasePath = __dirname + '/database.json'

// API routes
router.get('/api', function(req, res){
// read in the database
fs.readFile(databasePath, function(err, data){
  if (err) { console.log(err); }
  res.writeHead(200, {'Content-Type': 'text/json'});
  res.write(data);
  res.end();
});
// convert it to data
// send a response
});

// API Routes
router.post('/api', function(req, res){
  var todos = req.body.todos;
  fs.writeFile(databasePath, todos, function(err){
    if (err) { console.log(err); }
    // repond to the client 
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(todos);
    res.end();

    });
});


// everything route
router.get('/*', function indexRouteHandler (req, res) {
  res.render('view', {
    title: "Website Example",
    token: _.uniqueId()
  });
});





module.exports = router;
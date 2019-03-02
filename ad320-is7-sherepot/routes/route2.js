var express = require('express');
var router = express.Router();

var object = require('../colors.json');

router.get('/:black', function(req, res, next){
    //console.log(object.colors[0]);
    res.send(object.colors[0]);
});

router.get('/:white', function(req, res, next){  
    res.send(object.colors[1].color);
});

router.get('/:red', function(req, res, next){ 
    res.send(object.colors[2]);
});

router.get('/:blue', function(req, res, next){ 
    res.send(object.colors[3]);
});

router.get('/:yellow', function(req, res, next){ 
    res.send(object.colors[4]);
});


router.get('/:green', function(req, res, next){ 
    res.send(object.colors[5]);
});


router.get('/', function(req, res, next){
  res.send(object);
});


router.get('/:all',function(req, res, next){
    res.send(object);
    
});

module.exports = router;
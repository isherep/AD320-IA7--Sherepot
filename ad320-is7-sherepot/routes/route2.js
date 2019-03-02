var express = require('express');
var router = express.Router();

var object = require('../colors.json');
/*Get route1 page*/
//console.log(object);

router.get('/', function(req, res, next){
  res.send(object);
});

module.exports = router;

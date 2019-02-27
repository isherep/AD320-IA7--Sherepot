var express = require('express');
var router = express.Router();

/*Get route1 page*/

router.get('/', function(req, res, next){
  res.render('route1', {title: 'Route 1 page'});
});

module.exports = router;

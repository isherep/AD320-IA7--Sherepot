var express = require('express');
var router = express.Router();

var object = require('../colors.json');

router.get('/all',function(req, res, next){
    res.send(object);
    
});

router.get('/:color', function(req, res, next){
      res.send( getColorByName(req.params.color)  );
  });

function getColorByName(colorString){
    for(var i = 0; i<object.colors.length; i++){
          if (object.colors[i].color == colorString){
                return object.colors[i];
       }
    }
}

module.exports = router;
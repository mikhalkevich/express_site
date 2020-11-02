var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:url?', function(req, res, next) {
   if(req.params.url){
     var ttext = req.params.url;
   }else{
     var ttext = 'Добро пожаловать на сайт!'
   }   
  res.render('index', { title: ttext });
});

module.exports = router;

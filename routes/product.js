var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/all', function(req, res, next) {
  var obj = 'Продукты';
  console.log(obj);
  res.render('products', { product: obj });
});
router.get('/:id', function(req, res, next) {
  var obj = req.params.id;
  res.render('product', { product: obj });
});
module.exports = router;

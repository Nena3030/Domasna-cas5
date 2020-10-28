var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Countries Registry' });
});
get('/cities', function(req, res, next) {
  res.render('cities', { title: 'cities'});
});
module.exports = router;

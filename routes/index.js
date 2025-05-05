var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var currentans = 
router.get('/currentquiz.txt', function(req, res) {
  res.send("./images/Test.png");
});


module.exports = router;

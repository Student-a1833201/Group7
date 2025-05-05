var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var currentans = "Latias";
router.get('/currentquiz/', function(req, res) {
  res.send(currentans);
});

router.get('/newmon/:mon', function(req, res) {
  res.send(currentans);
});



module.exports = router;

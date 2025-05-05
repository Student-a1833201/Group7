var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var currentans = "Latias";
router.get('/currentquiz.txt', function(req, res) {
  console.log("out");
  res.send("ABC");
});

router.get('/newmon/:mon', function(req, res) {
  currentans = req.params.mon;
  console.log(currentans);

  //res.send(currentans);
});



module.exports = router;

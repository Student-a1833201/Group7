var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var currentans = "Latias";
router.get('/currentquiz.txt', function(req, res) {
  console.log("out");
  res.send(currentans);
});

router.post('/quizans', function(req, res) {
  currentans = req.body.ans;
  console.log("Saved: " + currentans);

  res.send("Abc");
});




module.exports = router;

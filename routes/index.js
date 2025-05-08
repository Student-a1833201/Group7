var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var currentans = "Latias";

// Returns the answer
router.get('/currentquiz.txt', function(req, res) {
  res.send(currentans);
});

// Updates the answer
router.post('/quizans', function(req, res) {
  currentans = req.body.ans;
  console.log(currentans);
  res.send("Abc");
});




module.exports = router;

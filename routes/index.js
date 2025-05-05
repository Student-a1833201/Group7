var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/quiz.txt', function(req, res) {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

    res.send("./images/Test.png");

});


module.exports = router;

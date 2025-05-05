var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/quiz.txt', function(req, res) {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

  // Make a GET request
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.sprites.front_default);
      res.send(data.sprites.front_default);
    })
    .catch(error => {
      console.error('Error:', error);
      res.send("./images/Test.png");
    });



});


module.exports = router;

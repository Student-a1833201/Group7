var num = 0;
function quizgen() {
    num++;
    var element = document.getElementById('randsprite');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        // Overcomplicated the heck out of this
        var test = getAPI();
        console.log(test);
        console.log(num);
        element.src = this.responseText;
    };

    xhttp.open("GET", "/quiz.txt", true);
    xhttp.send();

}

function getAPI() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.sprites.front_default);
      return "Hello";
    })
    .catch(error => {
        console.log("no");

      console.error('Error:', error);
    });
}
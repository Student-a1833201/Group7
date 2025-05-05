const apiAddress = "https://pokeapi.co/api/v2/pokemon/"

var num = 0;
function quizgen() {
    num++;
    var element = document.getElementById('randsprite');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        // Overcomplicated the heck out of this
        var test = getAPI();
        //element.src = this.responseText;
    };

    xhttp.open("GET", "/quiz.txt", true);
    xhttp.send();

}

function getAPI() {
    //var randmon = apiAddress.concat(getRandMon());
    var randmon = apiAddress.concat("ditto");

    console.log(randmon);
    var element = document.getElementById('randsprite');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        // Overcomplicated the heck out of this
        var data = JSON.parse(this.responseText)
        element.src = data.sprites.front_default;
    };

    xhttp.open("GET", randmon, true);
    xhttp.send();

}

function getRandMon() {
    var test = 0;
    var element = document.getElementById('randsprite');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        // Overcomplicated the heck out of this
        console.log(this.responseText)
        var data = JSON.parse(this.responseText)
        if (test == 2) {
            return data.results[Math.floor(Math.random()*1025)].name
        }
        test++
    };

    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0", true);
    xhttp.send();

}



/*
function getAPI() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto/sprites/front_default';
    var test = ""
    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.sprites.front_default);
      test = data.sprites.front_default;
    })
    .catch(error => {
        console.log("no");

      console.error('Error:', error);
    });

    return test;
}
    */
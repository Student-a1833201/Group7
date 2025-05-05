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

function getAPI(Pokemon) {
    var randmon = apiAddress.concat(Pokemon);
    //var randmon = apiAddress.concat("ditto");
    console.log(randmon);
    var element = document.getElementById('randsprite');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        // Overcomplicated the heck out of this
        if (this.responseText != "") {
            //console.log("Printing: " + this.responseText);
            var data = JSON.parse(this.responseText);
            element.src = data.sprites.front_default;
        }
    };

    xhttp.open("GET", randmon, true);
    xhttp.send();

}

function getRandMon(callback) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.responseText != "") {
            //console.log(this.responseText)
            var data = JSON.parse(this.responseText);
            console.log(data.results[Math.floor(Math.random()*1025)].name);
            callback(data.results[Math.floor(Math.random()*1025)].name);
        }
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

// Time to actually Get started
/*
document.addEventListener("DOMLOAD", init, false);


function init() {
    console.log("hello world");
    var searchbar = document.getElementById('Confirm');
    searchbar.addEventListener("click", showNextMon);

    var searchbar = document.getElementById('search');
    searchbar.addEventListener("change", showNextMon);
};*/

function getNextMon() {
    console.log("call");

    var element = document.getElementById('search');
    var element2 = document.getElementById('result');

    var search = element.value;
    var monname = "hello";

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.responseText != "") {
            //console.log(this.responseText)
            var data = JSON.parse(this.responseText);

            for (let i = 0; i < 1025; i++) {
                monname = data.results[i].name;
                monname = monname.substr(0,search.length);
                console.log(monname);
                if (monname == search) {
                    element2.innerText = data.results[i].name;
                    break;
                }
            }
        }
    };

    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0", true);
    xhttp.send();


}
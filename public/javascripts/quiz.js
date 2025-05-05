var quizmon = "";
var score = 0;

// Event Listeners are being weird
/*
document.addEventListener("DOMLOAD", init, false);


function init() {
    console.log("hello world");
    var searchbar = document.getElementById('Confirm');
    searchbar.addEventListener("click", showNextMon);

    var searchbar = document.getElementById('search');
    searchbar.addEventListener("change", showNextMon);
};*/

function fill(listnum) {
    var element2 = document.getElementsByClassName('result');
    var element = document.getElementById('search');
    element.value = element2[listnum].innerText
}

function getNextMon() {
    var element = document.getElementById('search');
    var element2 = document.getElementsByClassName('result');

    // Sets list to hide by default
    element2[0].style.display = "initial";
    element2[1].style.display = "initial";
    element2[2].style.display = "initial";

    var search = element.value;
    var monname = "hello";
    var result = false;
    var num = 0;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.responseText != "") {
            //console.log(this.responseText)
            var data = JSON.parse(this.responseText);
            // Searches if substring matches a pokemon
            for (let i = 0; i < 1025; i++) {
                monname = data.results[i].name;
                monname = monname.substr(0,search.length);
                if (monname == search) {
                    if (num != 3) {
                        element2[num].style.display = "inital";
                        element2[num].innerText = data.results[i].name;
                        num++
                        result = true;
                        //break;
                    }
                }
            }

            // Hides options if not necessary
            while (num < 3) {
                element2[num].style.display = "none";
                num++;
            }

        }
    };

    // Sources list of pokemon
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0", true);
    xhttp.send();
}


function questionGen(name) {
    var randmon = apiAddress.concat(name);
    console.log(randmon);

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        var data = JSON.parse(this.responseText);

        var sprite = document.getElementById('randsprite');
        if (score < 3) {
            sprite.src = data.sprites.front_default;
        } else {
            sprite.style.display = "none";
        }

        var typeAddress = "../images/types/";
        var type = document.getElementsByClassName('type');
        if (score < 7) {
            type[0].src = typeAddress.concat(data.types[0].type.name,".png");
            type[0].alt = data.types[0].type.name

            type[1].src = typeAddress.concat(data.types[1].type.name || "uknown",".png");
            type[1].alt = data.types[0].type.name || "uknown";
        } else {
            type[0].style.display = "none";
            type[1].style.display = "none";
        }
    };

    xhttp.open("GET", randmon, true);

    xhttp.send();
}

function getRandQuizMon(callback) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.responseText != "") {
            //console.log(this.responseText)
            var data = JSON.parse(this.responseText);
            //console.log(data.results[Math.floor(Math.random()*1025)].name);
            console.log("Hello World");
            callback(data.results[Math.floor(Math.random()*1025)].name);
        }
    };

    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0", true);
    xhttp.send();

  }

  function validate(callback) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.responseText != "") {
            //console.log(this.responseText)
            var data = JSON.parse(this.responseText);
            //console.log(data.results[Math.floor(Math.random()*1025)].name);
            callback(data.results[Math.floor(Math.random()*1025)].name);

            // Quiz Parameters
            if (score < 3) {

            }
        }
    };

    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0", true);
    xhttp.send();
  }
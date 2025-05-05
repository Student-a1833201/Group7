var quizmon;
var score;

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
    console.log("test");
    element.value = element2[listnum].innerText
}

function getNextMon() {
    console.log("call");

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
        console.log("Append");

        if (this.responseText != "") {
            //console.log(this.responseText)
            var data = JSON.parse(this.responseText);

            for (let i = 0; i < 1025; i++) {
                monname = data.results[i].name;
                monname = monname.substr(0,search.length);
                if (monname == search) {
                    if (num != 3) {
                        element2[num].style.display = "inital";
                        element2[num].innerText = data.results[i].name;
                        console.log(num);
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

    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0", true);
    xhttp.send();
}

function fourone() {
    var element = document.getElementById('test');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        // Overcomplicated the heck out of this
        element.innerText = this.responseText;

        /*
        if (this.readyState == 4 && this.status == 200) {
            if (element.innerText  == "Init") {
                time = new Date();
                element.innerText  = "This page was last viewed " + String(time);
            } else {
                element.innerText  = "";
                initial ++;
            }
        } else {
            // Blank
        }
        */
    };

    xhttp.open("GET", "/last.txt", true);

    xhttp.send();
}
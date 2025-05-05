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

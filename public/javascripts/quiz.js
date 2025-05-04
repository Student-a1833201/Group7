// Currently just testing - https://www.freecodecamp.org/news/make-api-calls-in-javascript/

// Define the API URL
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
    var element = document.getElementById('randsprite');
    element.src = data.sprites.front_default;
    element.alt = data.forms[0].name;
    console.log(data.sprites.front_default);
  })
  .catch(error => {
    console.error('Error:', error);
  });

/*
var initial = 0;

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

    };

    xhttp.open("GET", "/last.txt", true);

    xhttp.send();
}
*/
function quizgen() {
    var element = document.getElementById('colorful');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        // Overcomplicated the heck out of this
        element.style.color = this.responseText;
        element.innerText = this.responseText;
    };

    xhttp.open("GET", "/color.txt", true);

    xhttp.send();
}
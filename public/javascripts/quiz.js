function quizgen() {
    var element = document.getElementById('randsprite');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        // Overcomplicated the heck out of this
        element.style.color = this.responseText;
        element.innerText = this.responseText;
    };

    xhttp.open("GET", "/quiz.txt", true);
    xhttp.send();
}
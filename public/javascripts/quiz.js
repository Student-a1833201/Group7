var num = 0;
function quizgen() {
    num++;
    var element = document.getElementById('randsprite');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        // Overcomplicated the heck out of this
        console.log(num);
        element.src = this.responseText;
    };

    xhttp.open("GET", "/quiz.txt", true);
    xhttp.send();

}
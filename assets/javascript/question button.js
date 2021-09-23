// Display variables
var q = document.createElement("ul");
var a1 = document.createElement("li");
var a2 = document.createElement("li");
var a3 = document.createElement("li");
var a4 = document.createElement("li");

var a1Button = document.createElement("button");


function displayQuestion(questionIndex) {



    var q = document.getElementById("quiz-questions-container");
    console.log("q", q);

    var a1 = document.createElement("li");
    var a2 = document.createElement("li");
    var a3 = document.createElement("li");
    var a4 = document.createElement("li");

    a1Button = document.createElement("button");


    // display the first question
    q.innerHTML = questions[questionIndex].text;
    a1.innerHTML = questions[questionIndex].choices[0];
    a2.innerHTML = questions[questionIndex].choices[1];
    a3.innerHTML = questions[questionIndex].choices[2];
    a4.innerHTML = questions[questionIndex].choices[3];
    q.appendChild(a1);
    q.appendChild(a2);
    q.appendChild(a3);
    q.appendChild(a4);
    console.log("it works");

}
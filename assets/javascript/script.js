// global variables
var question = "";
var answer1 = "";
var answer2 = "";
var answer3 = "";
var answer4 = "";
var correctAnswer = "";

function bringOnTheNextQuestion() {
    var q = document.createElement("ol");
    var a1 = document.createElement("li");
    var a2 = document.createElement("li");
    var a3 = document.createElement("li");
    var a4 = document.createElement("li");

    q.textContent = question;
    a1.textContent = answer1;
    a2.textContent = answer2;
    a3.textContent = answer3;
    a4.textContent = answer4;

    q.appendChild(a1);
    q.appendChild(a2);
    q.appendChild(a3);
    q.appendChild(a3);


    function nextQuestion(); {
        if (button === "clicked") {
            question = "";
            answer1 = "";
            answer2 = "";
            answer3 = "";
            answer4 = "";
            bringOnTheNextQuestion();
        }
    };


    function Question1() {
        question = "what is question one";
        answer1 = "answer 1";
        answer2 = "answer 2";
        answer3 = "answer3";
        answer4 = "answer4";
        correctAnswer = answer1;

        if (correctAnswer === answer1) {
            console.log("good job!");
        } else if (correctAnswer != answer1) {
            console.log("You'll get it next time!");
        }
    };
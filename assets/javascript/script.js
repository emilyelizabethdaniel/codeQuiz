// global variables
var question = "";
var answer1 = "";
var answer2 = "";
var answer3 = "";
var answer4 = "";
var numberCorrect = 0;
var userSelection = "";

//timer variables
var timer = "";
var timeLeft = "";

//var timer
// function nextQuestion(); {
// if answer selected: run button event listener. run, bringOnTheNextQuestion.
// }

function emptyScreen() {
    document.body.innerHTML = "";
};

function bringOnTheNextQuestion() {
    var q = document.createElement("li");
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
    console.log("it works");
    //when button is clicked, display correct
}

function chooseAnAnswer() {
    if (correctAnswer === answer1) {
        numberCorrect + 1;

        console.log("good job!");

    } else if (correctAnswer != answer1) {
        timeLeft - 10;
        console.log("You'll get it next time!");
        return
    }
    emptyScreen();
}



function question1() {
    question = "what is question one";
    answer1 = "answer1";
    answer2 = "answer2";
    answer3 = "answer3";
    answer4 = "answer4";
    correctAnswer = answer1;

    if (correctAnswer === answer1) {
        numberCorrect + 1;

        console.log("good job!");

    } else if (correctAnswer != answer1) {
        timeLeft - 10;
        console.log("You'll get it next time!");
    }
};

bringOnTheNextQuestion();
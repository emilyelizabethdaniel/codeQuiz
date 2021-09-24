// Data variables
var questions = [{
        text: "Which of these is a type of variable in java script?:",
        choices: ["string", "int", "boolean", "all"],
        answer: "all"
    },
    {
        text: "question 1",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        text: "question 1",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        text: "question 1",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    }
];

var currentQuestionIndex = -1;
var initialRemainingSeconds = 60;
var remainingSeconds = initialRemainingSeconds;
var timerCount = document.getElementById("showtimer");
var timerClick = document.querySelector("#start-button");

// Display variables
var q = document.createElement("h2");
var a1 = document.createElement("button");
var a2 = document.createElement("button");
var a3 = document.createElement("button");
var a4 = document.createElement("button");

// display button variables

function displayQuestion(questionIndex) {

    var q = document.getElementById("quiz-questions-container");

    // var a1 = document.createElement("li");
    // var a1 = document.createElement("button");
    // // var a2 = document.createElement("li");
    // var a2 = document.createElement("button");
    // // var a3 = document.createElement("li");
    // var a3 = document.createElement("button");
    // // var a4 = document.createElement("li");
    // var a4 = document.createElement("button");

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
}

function handleStartQuizClick() {
    // start the timer
    var quizTimer = setInterval(function() {
        if (remainingSeconds <= 0) {
            clearInterval(quizTimer);
            console.log('Quiz complete');
        } else {
            // Decrement timer
            timerCount.textContent = remainingSeconds;

            remainingSeconds = remainingSeconds - 1;
            console.log('seconds remaining: ' + remainingSeconds);
        }
    }, 1000);
    document.getElementById("showtimer").textContent = remainingSeconds;
    displayQuestion(0);
}

document.addEventListener('click', function() {
    document.getElementById("main-page").textContent = "";
    document.getElementById("main-page").setAttribute("style", "background-color: white", "margin: 0%");
});

// function answerButtonClicked() {
//     var answerButtons = document.getElementById("answer-buttons")
//     answerButtons.addEventListener('click' (displayQuestion()));
// }
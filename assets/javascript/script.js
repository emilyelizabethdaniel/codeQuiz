// Data variables
var questions = [{
        text: "What are the types of date in js",
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

// Display variables
var q = document.createElement("ul");
var a1 = document.createElement("li");
var a2 = document.createElement("li");
var a3 = document.createElement("li");
var a4 = document.createElement("li");

// display button variables

function displayQuestion(questionIndex) {

    var q = document.getElementById("quiz-questions-container");
    console.log("q", q);

    var a1 = document.createElement("li");

    var a2 = document.createElement("li");

    var a3 = document.createElement("li");

    var a4 = document.createElement("li");



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
var timerCount = document.getElementById("showtimer");
var timerClick = document.querySelector("#start-button");

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

var startBtn = document.getElementById("startBtn");
var answerButtons = document.getElementById("answer-buttons")

document.addEventListener('click', function() {
    document.getElementById("main-page").textContent = "";
    document.getElementById("main-page").setAttribute("style", "background-color: white", "margin: 0%");
});

document.addEventListener('click', function() {
    document.getElementById("answer-buttons");
    if ("answer-buttons" === 'click') {
        displayQuestion();
    }
});


function correctAnswer() {
    //if button selected = ans
}
var quizContainer = document.getElementById("quiz-questions-container");
var resultsContainer = document.getElementById("display-answers-container");
var scoreContainer = document.getElementById("results-container");
var userInitials = document.getElementById("initials");

// Data variables
var questions = [{
        text: "Which of these is a type of variable in java script?:",
        choices: ["string", "int", "boolean", "all"],
        answer: "all"
    },
    {
        text: "With what special characters do you use to wrap a function",
        choices: ["[]", "!!", "()", "{}"],
        answer: "{}"
    },
    {
        text: "Is Java Script Object Oriented Programming?",
        choices: ["no", "maybe", "yes", "I don't know what that is!"],
        answer: "yes"
    },
    {
        text: "How do you link a js file to an html file",
        choices: ["<script>", "<link>", "<add js here>", "www.javascript.com"],
        answer: "<script>"
    },
    {
        text: "What special character follows every expression in js",
        choices: [":", ";", "!", "?"],
        answer: "<;>"
    }
];

var currentQuestionIndex = 0;
var initialRemainingSeconds = 60;
var remainingSeconds = initialRemainingSeconds;
var timerCount = document.getElementById("showtimer");
var timerClick = document.querySelector("#start-button");
var quizTimer = 0;

// Display variables
var q = document.createElement("h2");
var a1 = document.createElement("button");
var a2 = document.createElement("button");
var a3 = document.createElement("button");
var a4 = document.createElement("button");
var showFinalScore = document.createElement("p")

function finalScore() {
    showFinalScore = document.createElement("p")
    showFinalScore.textContent = ("Your Final Score = " + remainingSeconds);
    quizContainer.appendChild(showFinalScore);
    console.log("correct");
};

function displayHighScores() {
    var resultsFinalScore = documents.createElement("p");
    resultsFinalScore.textContent(remainingSeconds);
    resultsContainer.appendChild(resultsFinalScore);
};

function displayQuestion() {

    if (currentQuestionIndex > 4) {
        clearInterval(quizTimer);
        // finalScore();
        clearInterval(quizTimer);
        finalScore();
        displayHighScores();

    } else {

        // display the first question
        q.textContent = questions[currentQuestionIndex].text;
        a1.textContent = questions[currentQuestionIndex].choices[0];
        a2.textContent = questions[currentQuestionIndex].choices[1];
        a3.textContent = questions[currentQuestionIndex].choices[2];
        a4.textContent = questions[currentQuestionIndex].choices[3];
        quizContainer.appendChild(q);
        quizContainer.appendChild(a1);
        quizContainer.appendChild(a2);
        quizContainer.appendChild(a3);
        quizContainer.appendChild(a4);
    }
};

quizContainer.addEventListener("click", function(event) {

    if (event.target.matches("button")) {
        event.stopPropagation();
        event.preventDefault();
        var buttonClicked = event.target;
        var answerChosen = buttonClicked.textContent;
        var realAnswer = questions[currentQuestionIndex].answer;
    }
    // logic for whether the question was right or wrong
    if (answerChosen != realAnswer) {
        remainingSeconds = remainingSeconds - 10;
        currentQuestionIndex = currentQuestionIndex + 1;
        displayQuestion();

    } else {
        currentQuestionIndex = currentQuestionIndex + 1;
        displayQuestion();
    }
});

function handleStartQuizClick() {
    // start the timer
    quizTimer = setInterval(function() {
        if (remainingSeconds <= 0) {
            clearInterval(quizTimer);
            finalScore();

        } else {
            // Decrement timer
            timerCount.textContent = remainingSeconds;
            remainingSeconds = remainingSeconds - 1;
            console.log('seconds remaining: ' + remainingSeconds);
            document.getElementById("showtimer").textContent = ("Seconds Remaining: " + remainingSeconds);
        }
    }, 1000);

    displayQuestion();
}

var startButton = document.getElementById("startBtn")

startButton.addEventListener('click', function() {
    document.getElementById("main-page").textContent = "";
    document.getElementById("main-page").setAttribute("style", "background-color: #5B8DA1", "margin: 0%");
});

// function displayCorrectOrFalse() {

//     var displayCorrect = document.createElement("p")
//     displayCorrect.textContent = ("Correct!");
//     quizContainer.appendChild(displayCorrect);


// display high score:

// function displayHighScores() {
//     var resultsFinalScore = documents.createElement("p");
//     resultsFinalScore.textContent(remainingSeconds);
//     resultsContainer.appendChild(resultsFinalScore);
// };


//local storage 
// var myScore = remainingSeconds;
// var myInitials = "initials";

// localStorage.setItem("userinitials", myInitials);
// localStorage.setItem("userscore", myScore);

// var scoreList = document.getElementById("result");

// var initialPlacement = document.getElementById("result").textContent = localStorage.getItem("userinitials");
// var scorePlacement = document.getElementById("result").textContent = localStorage.getItem("userscore");
var quizContainer = document.getElementById("quiz-questions-container")

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
        choices: ["<link>", "<a>", "<add js here>", "www.javascript.com"],
        answer: "<link>"
    }
];

var currentQuestionIndex = 0;
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
a1.id = "button-choice-0";
a2.id = "button-choice-1";
a3.id = "button-choice-2";
a4.id = "button-choice-3"


// display button variables

function displayQuestion() {
    if (currentQuestionIndex > questions.length) {
        var finalScore = document.createAttribute("h3");
        finalScore.textContent = ("Your Score: remainingSeconds");
        q.appendChild(finalScore);
        console.log("?");
    } else {
        var q = document.getElementById("quiz-questions-container");

        // display the first question
        q.textContent = questions[currentQuestionIndex].text;

        a1.textContent = questions[currentQuestionIndex].choices[0];
        a1.value = questions[currentQuestionIndex].choices[0];

        a2.textContent = questions[currentQuestionIndex].choices[1];
        // a2.value
        a3.textContent = questions[currentQuestionIndex].choices[2];
        a4.textContent = questions[currentQuestionIndex].choices[3];
        q.appendChild(a1);
        q.appendChild(a2);
        q.appendChild(a3);
        q.appendChild(a4);
    }
};


quizContainer.addEventListener("click", function(event) {
    if (event.target.matches("button")) {
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
})



function isAnswerCorrect() {
    var correctAnswer = questions[answer];

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
    displayQuestion();
}


//start button 



var startButton = document.getElementById("startBtn")

startButton.addEventListener('click', function() {
    document.getElementById("main-page").textContent = "";
    document.getElementById("main-page").setAttribute("style", "background-color: white", "margin: 0%");
});
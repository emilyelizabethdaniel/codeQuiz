// Data variables
var questions = [{
        text: "Which of these is a type of variable in java script?:",
        choices: ["string", "int", "boolean", "all"],
        answer: "all"
    },
    {
        text: "did it work?",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        text: " yes it worked ",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        text: "hell yeah 1",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
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

function displayQuestion(questionIndex) {

    var q = document.getElementById("quiz-questions-container");

    // display the first question
    q.innerHTML = questions[questionIndex].text;

    a1.innerHTML = questions[questionIndex].choices[0];
    a1.value = questions[questionIndex].choices[0];

    a2.innerHTML = questions[questionIndex].choices[1];
    // a2.value
    a3.innerHTML = questions[questionIndex].choices[2];
    a4.innerHTML = questions[questionIndex].choices[3];
    q.appendChild(a1);
    q.appendChild(a2);
    q.appendChild(a3);
    q.appendChild(a4);

    currentQuestionIndex = currentQuestionIndex + 1;
    selectAnswer();

};

function selectAnswer() {
    var choiceOneButton = document.getElementById("button-choice-0")
    choiceOneButton.addEventListener('click', function() {
        displayQuestion(currentQuestionIndex);
    });
    var choiceTwoButton = document.getElementById("button-choice-1")
    choiceTwoButton.addEventListener('click', function() {
        displayQuestion(currentQuestionIndex);
    })

    var choiceThreeButton = document.getElementById("button-choice-2")
    choiceThreeButton.addEventListener('click', function() {
        displayQuestion(currentQuestionIndex);
    })
    var choiceFourButton = document.getElementById("button-choice-3")
    choiceFourButton.addEventListener('click', function() {
            displayQuestion(currentQuestionIndex);
        })
        // if (questionIndex.answer != qValue) {
        //     var newTime = remainingSeconds - 10;
        //     remainingSeconds = newTime;
        // }
};


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
    displayQuestion(0);
}


//start button 



var startButton = document.getElementById("startBtn")

startButton.addEventListener('click', function() {
    document.getElementById("main-page").textContent = "";
    document.getElementById("main-page").setAttribute("style", "background-color: white", "margin: 0%");
});
var quizContainer = document.getElementById('quiz');
var question = [{
        questionText: "question 1",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        questionText: "question 1",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        questionText: "question 1",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },
    {
        questionText: "question 1",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer2"
    },

];

// on click, the startGame function begins
function startGame() {

    // makes the title, instructions, and start button disappear
    var mainPage = document.getElementById("main-page");
    mainPage.setAttribute("style", "display: none");

}

//  countdown begins function 
var timeLeft = 60;

function callback() {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        timerEl.textContent = "Time is up!";
    }
}
var timerInterval = setInterval(callback, 1000);
// askQuestion1();
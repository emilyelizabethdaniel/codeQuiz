var myScore = remainingSeconds;
var myInitials = "initials";

localStorage.setItem("userinitials", myInitials);
localStorage.setItem("userscore", myScore);

var scoreList = document.getElementById("result");

var initialPlacement = document.getElementById("result").textContent = localStorage.getItem("userinitials");
var scorePlacement = document.getElementById("result").textContent = localStorage.getItem("userscore");
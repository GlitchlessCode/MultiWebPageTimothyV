// Button Management Script by Timothy V
// -- Initialize Variables --

// HTML Elements
let homeBtn = document.getElementById("homeBtn");
let aboutBtn = document.getElementById("aboutBtn");
let quizBtn = document.getElementById("quizBtn");

// Glbl Variables
// (None)


// -- Add Event Listeners --
if (homeBtn != null) {
    homeBtn.addEventListener("click", gotoHome);
}
if (aboutBtn != null) {
    aboutBtn.addEventListener("click", gotoAbout);
}
if (quizBtn != null) {
    quizBtn.addEventListener("click", gotoQuiz);
}

// -- Functions --

// Event Functions
function gotoHome() {
    location.replace("/index.html");
}

function gotoAbout() {
    location.replace("/about.html");
    console.log("About");
}

function gotoQuiz() {
    location.replace("/quiz.html");
}
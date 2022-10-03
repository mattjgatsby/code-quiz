var timeEl = document.getElementById("time");
var welcomeEl = document.getElementById("welcome");
var questionsEl = document.getElementById("questions");
var initalEl = document.getElementById("inital");
var startEl = document.getElementById("start");

var questions = [
    {
        title:"Question", 
        choices: ["","","",""],
        answer: ""
    }
]
// after event listner we hide the welcome, unhide the view questions, and start the timeEl.
function startQuiz () {
        welcomeEl.setAttribute("class","view");
        questionsEl.removeAttribute("class");

}

startEl.addEventListener("click", startQuiz);

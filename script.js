var timeEl = document.getElementById("time");
var welcomeEl = document.getElementById("welcome");
var questionsEl = document.getElementById("questions");
var initalEl = document.getElementById("inital");
var startEl = document.getElementById("start");
var titleEl = document.getElementById("title");

var questions = [
    {
        title:"Question", 
        choices: ["","","",""],
        answer: ""
    }
]
var qIndex = 0;
console.log(questions);

var time = questions.length * 15;
console.log(time);

var timerId;
// This function is going to identfy the time, and we count down
function timeTrack() {
        time--;
        timeEl.textContent = time;
        // if(time <= 0) {
        //     quizEnd();
        // }
}
// this function will display title, display questions Array.title

function getQuestions() {
    var currentQ = questions[qIndex];
    titleEl.textContent = currentQ.title;
    


    // for loop through the choices, each index process will create a Button
    // set attribute to button class = choice, add vaule of index to the button 
    // var . onlick = function, 
}


// after event listner we hide the welcome, unhide the view questions, and start the timeEl.
function startQuiz () {
        welcomeEl.setAttribute("class","view");
        questionsEl.removeAttribute("class");
        timerId = setInterval(timeTrack, 1000);
        timeEl.textContent = time;
        getQuestions();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
}

startEl.addEventListener("click", startQuiz);

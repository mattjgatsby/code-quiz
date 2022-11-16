var timeEl = document.getElementById("time");
var welcomeEl = document.getElementById("welcome");
var questionsEl = document.getElementById("questions");
var initalEl = document.getElementById("inital");
var startEl = document.getElementById("start");
var titleEl = document.getElementById("title");
var optionEl = document.querySelectorAll(".option");

var currentQ = 0;
var currentScore = 0;
var timeRemaining = 0;

var endingTime;
var endingScore;

var questions = [
  {
    title: "Which is a Boolean value?",
    choices: ["True", "Nope", "Yeah", "Nah"],
    answer: "True",
  },
  {
    title: "Which is NOT a semantic element?",
    choices: ["Form", "nav", "aside", "div"],
    answer: "div",
  },
  {
    title: "Which is a self closeing tag",
    choices: ["<aside>", "<figure>", "<article>", "<br>"],
    answer: "<br>",
  },
  {
    title: "Which comparison operator means strictly equal to?",
    choices: ["==", "!=", "<=", "==="],
    answer: "===",
  },
];

//refactoring script utilizing event listeners. Less functions to call on

startEl.addEventListener("click", () => {
  setTime();
  titleEl.textContent = questions[0].title;
  optionEl.forEach((a, b) => {
    a.textContent = questions[0].choices[b];
    showContent(questionsEl);
    hideContent(welcomeEl);
  });
});

function setTime() {
  timeRemaining = 20;
  timeEl.textContent = `Time: ${timeRemaining}`;
  let timeI = setInterval(() => {
    if (timeRemaining > 1) {
      --timeRemaining;
      timeEl.textContent = `Time: ${timeRemaining}`;
    } else {
      exit();
      clearInterval(timeI);
    }
  });
}

function showContent(element) {
  element.classList.remove("display-nothing");
}
function hideContent(element) {
  element.classList.add("display-nothing");
}

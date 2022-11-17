var timeEl = document.getElementById("time");
var welcomeEl = document.getElementById("welcome");
var questionsEl = document.getElementById("questions");
var initalEl = document.getElementById("inital");
var startEl = document.getElementById("start");
var titleEl = document.getElementById("title");
var optionEl = document.querySelectorAll(".option");
var scoreMessage = document.getElementById("score-message");
var scoreEl = document.getElementById("score");
var doneEl = document.getElementById("done");
var form = document.querySelector("form");

var currentQ = 0;
var currentScore = 0;
var timeRemaining = 0;

var endingTime;
var endingScore;

var questions = [
  {
    title: "Which is a Boolean value?",
    choices: ["True", "Nope", "Yeah", "Nah"],
    answer: 0,
  },
  {
    title: "Which is NOT a semantic element?",
    choices: ["Form", "nav", "aside", "div"],
    answer: 3,
  },
  {
    title: "Which is a self closeing tag",
    choices: ["<aside>", "<figure>", "<article>", "<br>"],
    answer: 3,
  },
  {
    title: "Which comparison operator means strictly equal to?",
    choices: ["==", "!=", "<=", "==="],
    answer: 3,
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

optionEl.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.getAttribute("data-option") == questions[currentQ]?.answer) {
      currentScore++;
    } else {
      timeRemaining = timeRemaining - 5;
    }
    if (currentQ == questions.length - 1 || timeRemaining <= 0) {
      exit();
    } else {
      ++currentQ;
      questionsEl.textContent = questions[currentQ].title;
      optionEl.forEach((a, b) => {
        a.textContent = questions[0].choices[b];
      });
    }
  });
});

function setTime() {
  timeRemaining = 20;
  timeEl.textContent = `Time: ${timeRemaining}`;
  let timeI = setInterval(() => {
    if (timeRemaining > 1) {
      --timeRemaining;
      timeEl.textContent = `Time: ${timeRemaining}`;
    } else if (timeRemaining <= 1) {
      exit();
      clearInterval(timeI);
    }
  }, 1000);
}

function showContent(element) {
  element.classList.remove("display-nothing");
}
function hideContent(element) {
  element.classList.add("display-nothing");
}

function exit() {
  hideContent(questionsEl);
  endingScore = currentScore;
  endingTime = timeRemaining;
  timeRemaining = 0;
  timeEl.textContent = `Time: ${timeRemaining}`;
  scoreMessage.textContent = `Score: ${endingScore}`;
  showContent(doneEl);
}

form.addEventListener("submit", (e) => {
  let initial = document.querySelector("#initial").value;
  let score = JSON.parse(localStorage.getItem("score"));
  let userS = {
    initial: initial,
    score: endingScore,
  };
  e.preventDefault();
  if (initial) {
    hideContent(doneEl);
    showContent(scoreEl);
    if(score) {
      score.push(userS)
    } else {
      score = [userS]
    }
    localStorage.setItem("score", JSON.stringify(score))
    hideContent(doneEl)
    showContent(scoreEl)
  }
});



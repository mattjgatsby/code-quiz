let timeEl = document.getElementById("time");
let welcomeEl = document.getElementById("welcome");
let questionsEl = document.getElementById("questions");
let initalEl = document.getElementById("inital");
let startEl = document.getElementById("start");
let titleEl = document.getElementById("title");
let optionEl = document.querySelectorAll(".option");
let scoreMessage = document.getElementById("score-message");
let scoreEl = document.getElementById("score");
let doneEl = document.getElementById("done");
let form = document.querySelector("form");
let returnBtn = document.getElementById("return-button");

let questions = [
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

let currentQ = 0;
let currentScore = 0;
let timeRemaining = 0;

let endingTime = 0;
let endingScore = 0;

//refactoring script utilizing event listeners. Less functions to call on

startEl.addEventListener("click", () => {
  setTime();
  titleEl.textContent = questions[0].title;
  optionEl.forEach((a, b) => {
    a.textContent = questions[0].choices[b];
  });
  showContent(questionsEl);
  hideContent(welcomeEl);
});

optionEl.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.getAttribute("option") == questions[currentQ].answer) {
      currentScore++;
    } else {
      timeRemaining = timeRemaining - 5;
    }
    if (currentQ == questions.length - 1 || timeRemaining <= 0) {
      exit();
    } else {
      currentQ++;
      titleEl.textContent = questions[currentQ].title;
      optionEl.forEach((a, b) => {
        a.textContent = questions[currentQ].choices[b];
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

returnBtn.addEventListener("click", () => {
  hideContent(scoreEl);
  showContent(welcomeEl);
});

function exit() {
  hideContent(questionsEl);
  endingScore = currentScore;
  endingTime = timeRemaining;
  timeRemaining = 0;
  currentQ = 0;
  currentScore = 0;
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
    if (score) {
      score.push(userS);
    } else {
      score = [userS];
    }
    localStorage.setItem("score", JSON.stringify(score));
    hideContent(doneEl);
    showContent(scoreEl);
  }
});

// function scoreBoard() {
//   let item = document.querySelectorAll("li");
//   item.forEach((element) => {
//     element.remove();
//   });
//   let score = JSON.parse(localStorage.getItem("score"));
//   score.sort((a, b) => {
//     return b.score - a.score;
//   });
//   score.forEach((c, d) => {
//     let li = document.createElement("li");
//     li.textContent = `${d + 1}. ${c.initial} - ${c.score}`;
//     scoreList.appendchild(li);
//   });
// }

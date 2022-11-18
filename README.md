# Code Quiz

## Description
In this app I put together a simple quiz on code topics relating to JavaScript and HTML. I made this application to practice JavaScript functions, event listeners, and appending elements to a page.

## Technology Used
* HTML
* JavaScript

## Code Snippet

In this code snippet, I take optionsEl which is a variable set equal to a document.getElementById. Then for each element I add an event listener to do some work on a click. In this case if the element clicked has an attribute equal to the answer for the current question in the questions array, it increase the score of the user. Else, the time remaining for the quiz is lowered by a factor of 5. 

```JavaScript 
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
```
Here, I have a function that is setting the time for the quiz. I take a timeEl set to a id given in the html and give it the text content of the variable timeRemaining. I then use a setInterval to decrease the time until it reaches 0 at which the function to exit the quiz is called.

```JavaScript
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
```

## Author links
* [GitHub](https://github.com/mattjgatsby)
* [LinkedIn](https://www.linkedin.com/in/matthew-gatsby-1a1521250/)
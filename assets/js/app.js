"use strict";

// create the variables for score, high score and secret number
let index = 1;
let score = 6;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const searchInput = (index, color, wrongGuess = false) => {
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.className == `guess${index}`) {
      input.style = `border: 4px solid ${color}`;
      input.disabled = false;
      input.focus();
      if (wrongGuess) {
        input.previousElementSibling.style = `border: 3px solid #D83A56`;
      }
    } else {
      input.disabled = true;
    }
  });
};

const displayMessage = message => document.querySelector(".msg").textContent = message;
const changeBgColor = color => document.querySelector("body").style = `background :${color}`;
const isCheckBtnDisable = isDisable => document.querySelector(".check").disabled = isDisable;
const changeThemeColor = themeColor => document.querySelector('[name="theme-color"]').setAttribute("content", themeColor);
const setScore = score => document.querySelector(".score > span").textContent = score;
searchInput(index, "#FFC107");

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(`.guess${index}`).value);
  console.log(guess, typeof guess);
  
  // when there is no input
  if (!guess) {
    console.log("null");
    displayMessage("Please enter the number 🤦‍♀️");
  }

  // when player is win
  else if (guess === secretNumber) {
    displayMessage("Correct Number! 👌");
    changeBgColor("#4aa96c");
    document.querySelector(".number").textContent = secretNumber;
    searchInput(index, "#66DE93");
    isCheckBtnDisable(true);
    changeThemeColor("#66DE93");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore > span").textContent = highScore;
    }
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage( guess > secretNumber ?  "Too High 🤷‍♀️" : "Too Low 🤔");
      score--;
      setScore(score);
      searchInput(++index, "#FFC107", true);
    } else {
      displayMessage("You lost the game 💥");
      isCheckBtnDisable(true);
      setScore(0);
    }
  }
  
});

const reset = () => {
  isCheckBtnDisable(false);
  let inputs = document.querySelectorAll("input");
  changeThemeColor("#343a40");
  inputs.forEach((input) => {
    input.style = `border: 3px solid #e1e8eb`;
    input.value = "";
  });
};

document.querySelector(".again").addEventListener("click", () => {
  index = 1;
  reset();
  searchInput(index, "#FFC107");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 6;
  setScore(score);
  displayMessage("Guess the number between 1 to 20 🐱‍👤");
  if (!document.querySelector(".msg").textContent.includes("You lost the game")) {
    changeBgColor("#343a40");
    document.querySelector(".number").textContent = "?";
  }
});

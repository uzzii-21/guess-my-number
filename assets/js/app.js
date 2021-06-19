"use strict";

let index = 1;

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
      // #D83A56 red'
      // 66DE93 green
    }
  });
};

searchInput(index, "#FFC107");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 6;
let highScore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(`.guess${index}`).value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    console.log("null");
    document.querySelector(".msg").textContent = "Please enter the number 🤦‍♀️";
  }
  // when player is win
  else if (guess === secretNumber) {
    document.querySelector(".msg").textContent = "Correct Number! 👌";
    document.querySelector("body").style = "background : #4aa96c";
    document.querySelector(".number").textContent = secretNumber;
    searchInput(index, "#66DE93");
    document.querySelector(".check").disabled = true;
    document
      .querySelector('[name="theme-color"]')
      .setAttribute("content", "#66DE93");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore > span").textContent = highScore;
    }
  }
  // when guess is to high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".msg").textContent = "Too High 🤷‍♀️";
      score--;
      document.querySelector(".score > span").textContent = score;
      searchInput(++index, "#FFC107", true);
    } else {
      document.querySelector(".msg").textContent = "You lost the game 💥";
      document.querySelector(".check").disabled = true;
      document.querySelector(".score > span").textContent = 0;
    }
  }
  // when guess is to low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".msg").textContent = "Too Low 🤔";
      score--;
      document.querySelector(".score > span").textContent = score;
      searchInput(++index, "#FFC107", true);
    } else {
      document.querySelector(".msg").textContent = "You lost the game 💥";
      document.querySelector(".check").disabled = true;
      document.querySelector(".score > span").textContent = 0;
    }
  }
});

const reset = () => {
  document.querySelector(".check").disabled = false;
  let inputs = document.querySelectorAll("input");
  document
    .querySelector('[name="theme-color"]')
    .setAttribute("content", "#343a40");
  inputs.forEach((input) => {
    input.style = `border: 4px solid #e1e8eb`;
    input.value = "";
  });
};
document.querySelector(".again").addEventListener("click", () => {
  index = 1;
  reset();
  searchInput(index, "#FFC107");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 6;
  if (
    document.querySelector(".msg").textContent.includes("You lost the game")
  ) {
    document.querySelector(".score > span").textContent = score;
    document.querySelector(".msg").textContent =
      "Guess the number between 1 to 20 🐱‍👤";
    document.querySelector(".guess").value = "";
  } else {
    document.querySelector(".score > span").textContent = score;
    document.querySelector("body").style = "background : #343a40";
    document.querySelector(".msg").textContent =
      "Guess the number between 1 to 20 🐱‍👤";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
  }
});

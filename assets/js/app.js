"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    if (!guess) {
        console.log("null")
        document.querySelector('.msg').textContent = "Please enter the number 🤦‍♀️";
    }
    else if (guess === secretNumber) {
        document.querySelector('.msg').textContent = "Correct Number! 👌";
    }
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.msg').textContent = "Too High 🤷‍♀️";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.msg').textContent = "You lost the game 💥";
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.msg').textContent = "Too Low 🤔";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.msg').textContent = "You lost the game 💥";
            document.querySelector('.score').textContent = 0;
        }
    }
})

"use strict";
console.log("js working");

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
        if (score > 0) {
            document.querySelector('.msg').textContent = "Too High 🤷‍♀️";
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
    else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.msg').textContent = "Too Low 🤔";
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
})

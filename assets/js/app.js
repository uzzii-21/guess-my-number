"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    // when there is no input 
    if (!guess) {
        console.log("null")
        document.querySelector('.msg').textContent = "Please enter the number 🤦‍♀️";
    }
    // when player is win
    else if (guess === secretNumber) {
        document.querySelector('.msg').textContent = "Correct Number! 👌";
        document.querySelector('body').style = "background : #4aa96c";
        document.querySelector(".number").textContent = secretNumber;
    }
    // when guess is to high
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
    // when guess is to low
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

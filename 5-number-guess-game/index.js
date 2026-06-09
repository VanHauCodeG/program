const check_btn = document.getElementById("check-btn");
const message = document.getElementById("message");
const displayScore = document.getElementById("score");
const resetBtn = document.getElementById("reset-btn");
const highscore = document.getElementById("highscore");

let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let score = 10;
let high = 0;

check_btn.onclick = function () {
  const guess_input = +document.getElementById("guess-input").value;

  if (
    isNaN(guess_input) ||
    document.getElementById("guess-input").value === ""
  ) {
    message.textContent = "Please enter a valid number";
  } else if (guess_input < minNum || guess_input > maxNum) {
    message.textContent = "Please enter a valid number";
  } else if (guess_input < answer) {
    score--;
    displayScore.textContent = score;
    if (score === 0) {
      message.textContent = `Game Over! The answer was ${answer}`;
      check_btn.disabled = true;
    } else {
      message.textContent = "Too low! Try again";
    }
  } else if (guess_input > answer) {
    score--;
    displayScore.textContent = score;
    if (score === 0) {
      message.textContent = `Game Over! The answer was ${answer}`;
      check_btn.disabled = true;
    } else {
      message.textContent = "Too high! Try again";
    }
  } else {
    if (score > high) {
      high = score;
    }
    highscore.textContent = high;
    message.textContent = "Correct! You win!";
    check_btn.disabled = true;
  }
};

resetBtn.onclick = function () {
  answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  message.textContent = "Waiting for your guess...";
  score = 10;
  displayScore.textContent = score;
  document.getElementById("guess-input").value = "";
  check_btn.disabled = false;
};

const check_btn = document.getElementById("check-btn");
const message = document.getElementById("message");
const displayScore = document.getElementById("score");
const resetBtn = document.getElementById("reset-btn");
const highscore = document.getElementById("highscore");

let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1));
let score = 10;
let high = 0;

check_btn.onclick = function() {
    const guess_input = +document.getElementById("guess-input").value;
    if(isNaN(guess_input) || document.getElementById("guess-input").value === "" ){
        message.textContent = 'please  enter a valid number';
    }
    else if(guess_input < minNum || guess_input > maxNum ){
        message.textContent = 'please  enter a valid number';
    }
    else if(guess_input < answer ){
        message.textContent = 'Too low! Try again';
        score--;
        displayScore.textContent = score;
    }else if(guess_input > answer ){
        message.textContent = 'Too high! Try again';
        score--;
        displayScore.textContent = score;
    }
    else{
        if(score > high) {
            high = score;
        }
        highscore.textContent = high;
        message.textContent = 'Correct';
    }
}

resetBtn.onclick = function () {
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    message.textContent = '';
    score = 10;
    displayScore.textContent = score;
    document.getElementById("guess-input").value = ""
}

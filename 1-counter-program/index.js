
const countLabel = document.getElementById("countLabel");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

function updateDisplay() {
    countLabel.textContent = count;
}

increaseBtn.onclick = function() {
    count++;
    updateDisplay(); 
}

decreaseBtn.onclick = function() {
    count--;
    updateDisplay();
}

resetBtn.onclick = function() {
    count = 0;
    updateDisplay();
}
const Roll = document.getElementById("rollBtn");
const dicelabel = document.getElementById("dicelabel");
const reset = document.getElementById("resetBtn");

let dice = 0;
function updateDisplay() {
    dicelabel.textContent = dice;
}

Roll.onclick = function() {
    dice = Math.floor(Math.random() * 6) + 1;
    updateDisplay();
}
reset.onclick = function() {
    dice = 0;
    updateDisplay();
}



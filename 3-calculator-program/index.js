const screen = document.getElementById("screen");

const zeroBtn = document.getElementById("zeroBtn");
const oneBtn = document.getElementById("oneBtn");
const twoBtn = document.getElementById("twoBtn");
const threeBtn = document.getElementById("threeBtn");
const fordBtn = document.getElementById("fordBtn"); 
const fiveBtn = document.getElementById("fiveBtn");
const sixBtn = document.getElementById("sixBtn");
const sevenBtn = document.getElementById("sevenBtn");
const eightBtn = document.getElementById("eightBtn");
const nineBtn = document.getElementById("nineBtn");

const plusBtn = document.getElementById("plusBtn");
const truBtn = document.getElementById("truBtn");
const nhanBtn = document.getElementById("nhanBtn");
const chiaBtn = document.getElementById("chiaBtn");
const resetBtn = document.getElementById("resetBtn");
const bangBtn = document.getElementById("bangBtn");

let currentInput = "";   
let previousInput = "";  
let operation = null;  

function updateScreen(value) {
    screen.textContent = value === "" ? "0" : value;
}

function handleNumber(number) {
    if (currentInput === "0" && number === "0") return;
    
    if (currentInput === "0") {
        currentInput = number;
    } else {
        currentInput += number; 
    }
    updateScreen(currentInput);
}

zeroBtn.onclick = function() { handleNumber("0"); };
oneBtn.onclick = function() { handleNumber("1"); };
twoBtn.onclick = function() { handleNumber("2"); };
threeBtn.onclick = function() { handleNumber("3"); };
fordBtn.onclick = function() { handleNumber("4"); }; 
fiveBtn.onclick = function() { handleNumber("5"); };
sixBtn.onclick = function() { handleNumber("6"); };
sevenBtn.onclick = function() { handleNumber("7"); };
eightBtn.onclick = function() { handleNumber("8"); };
nineBtn.onclick = function() { handleNumber("9"); };

function handleOperator(op) {
    if (currentInput === "") return; 
    
    operation = op;                  
    previousInput = currentInput;    
    currentInput = "";               
}

plusBtn.onclick = function() { handleOperator("+"); };
truBtn.onclick = function() { handleOperator("-"); };
nhanBtn.onclick = function() { handleOperator("*"); };
chiaBtn.onclick = function() { handleOperator("/"); };

bangBtn.onclick = function() {
    if (previousInput === "" || currentInput === "" || operation === null) return;

    let num1 = Number(previousInput);
    let num2 = Number(currentInput);
    let result = 0;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "Error (Chia cho 0)"; 
            } else {
                result = num1 / num2;
            }
            break;
    }

    updateScreen(result);

    currentInput = result.toString();
    previousInput = "";
    operation = null;
};

resetBtn.onclick = function() {
    currentInput = "";
    previousInput = "";
    operation = null;
    updateScreen("0");
};
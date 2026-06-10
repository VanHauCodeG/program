const fahrenheitBtn = document.getElementById("fahrenheitBtn"); 
const celciusBtn = document.getElementById("celciusBtn");       
const inputBtn = document.getElementById("inputBtn");          
const screen = document.getElementById("screen");               

function isValidNumber(inputValue) {
    let num = Number(inputValue);
    if (inputValue === "" || isNaN(num)) {
        return false;
    }
    return true;
}

fahrenheitBtn.onclick = function() {
    if (!isValidNumber(inputBtn.value)) {
        screen.textContent = "Please enter a valid number.!";
        return;
    }
    
    let value = Number(inputBtn.value);
    let result = value * 1.8 + 32; 
    screen.textContent = `Result: ${result.toFixed(2)} °F`;
};

celciusBtn.onclick = function() {
    if (!isValidNumber(inputBtn.value)) {
        screen.textContent = "Please enter a valid number.!";
        return;
    }
    
    let value = Number(inputBtn.value);
    let result = (value - 32) / 1.8; 
    screen.textContent = `Result: ${result.toFixed(2)} °C`;
};
const resultDice = document.getElementById("resultDice");
const diceImagesContainer = document.getElementById("diceImages"); 
const numberInput = document.getElementById("dice");

function rollDice() {
    let num = 0;
    let imagesHTML = []; 
    const count = Number(numberInput.value); 
    if(count <1 || count > 6){
        resultDice.textContent =`Error! Enter numbers from 1 to 6`;
        diceImagesContainer.innerHTML = "";
        return;
    }
    for (let i = 1; i <= count; i++) {
        let dice = Math.floor(Math.random() * 6) + 1;
        num += dice;
        imagesHTML.push(`<img src="img/${dice}.gif" alt="Dice ${dice}" style="width: 80px; margin: 10px;">`);
    }

    resultDice.textContent = `Tổng điểm: ${num}`; 
    diceImagesContainer.innerHTML = imagesHTML.join(""); 
}
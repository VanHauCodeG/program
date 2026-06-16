// 1. ORIGINAL SYSTEM DATA
const user = {
    money: 500
};

const marketPlayers = [
    { 
        name: "Ronaldo", 
        season: "26TY", 
        price: 200, 
        image: "https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.1.png"
    },
    { 
        name: "Messi", 
        season: "26TY", 
        price: 180, 
        image: "https://cdn.fifacm.com/content/media/imgs/fc26/players/p158023.png?v=26"
    },
    { 
        name: "Mbappe", 
        season: "26TY", 
        price: 150, 
        image: "https://b.fssta.com/uploads/application/soccer/headshots/40670.vresize.350.350.medium.1.png" 
    },
    { 
        name: "Maguire", 
        season: "26TY", 
        price: 50, 
        image: "https://b.fssta.com/uploads/application/soccer/headshots/6318.png" 
    }
];

// Handles dynamic shifting indexes when filtering players
let currentPlayers = [...marketPlayers];

// 2. DOM SELECTORS
const playerListTag = document.getElementById("playerList");
const searchBoxTag = document.getElementById("searchBox");
const myMoneyTag = document.getElementById("myMoney");

// 3. RENDER FUNCTION
function displayPlayers(playersArray) {
    const htmlCards = playersArray.map(function(player, index) {
        return `
            <div class="card">
                <img src="${player.image}" alt="${player.name}" class="player-thumb">
                <h3>[${player.season}] ${player.name}</h3>
                <p>Price: ${player.price}M BP</p>
                <button onclick="window.buyPlayer(${index})">Buy Now</button>
            </div>
        `;
    });
    playerListTag.innerHTML = htmlCards.join("");
}

// Initial render
displayPlayers(marketPlayers);

// 4. REAL-TIME SEARCH EVENT
searchBoxTag.addEventListener("input", function() {
    let keyword = searchBoxTag.value.trim().toLowerCase();
    currentPlayers = marketPlayers.filter(function(item) { 
        return item.name.toLowerCase().includes(keyword);
    });
    displayPlayers(currentPlayers);    
});

// 5. GLOBAL BUY BUTTON FUNCTION
window.buyPlayer = function(index) {
    const player = cuSrrentPlayers[index];
    if (user.money >= player.price) {
        user.money -= player.price; 
        myMoneyTag.innerText = user.money;
        alert(`Congratulations! You have successfully signed ${player.name}!`);
    } else {
        alert("Insufficient funds! Go grind some match rewards kkk!");
    }
};
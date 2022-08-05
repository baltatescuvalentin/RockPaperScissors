
let pScore = 0;
let cScore = 0;
const emoji = ['✊', '✋', '✌', '❔'];
let computerEmoji;

var buttons = document.querySelectorAll("button.sign.btn");
const whoWon = document.querySelector('#who_won');
const howWon = document.querySelector('#how_won');
const playerSign = document.querySelector('#playerSign');
const computerSign = document.querySelector('#computerSign');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
var alertBox = document.getElementById('alertbox');
var gameContainer = document.getElementById('game');
var playAgain = document.getElementById('alertbox');
const messageAlertBox = document.querySelector('#alert_message');
var playAgainBtn = document.querySelector('#alertbox_playagain');

function getComputerChoice() {
    let random = Math.floor((Math.random()*3) + 1);
    if(random == 1) {
        computerEmoji = emoji[0];
        return "Rock";
    }
    else if(random == 2) {
        computerEmoji = emoji[1];
        return "Paper";
    }
    else {
        computerEmoji = emoji[2];
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let results = [];
    if(player === computer) {
        results.push("It's a tie!");
        results.push(-1);
        return results;
    }
    else if(player === "rock" && computer === "paper") {
        results.push("Paper beats Rock!");
        results.push(1);
        return results;
    }
    else if(player === "scissors" && computer === "rock") {
        results.push("Rock beats Scissors!");
        results.push(1);
        return results;
    }
    else if(player === "paper" && computer === "scissors") {
        results.push("Scissors beats Paper!");
        results.push(1);
        return results;
    }
    else if(player === "rock" && computer == "scissors") {
        results.push("Rock beats Scissors!");
        results.push(0);
        return results;
    }
    else if(player === "paper" && computer === "rock") {
        results.push("Paper beats Rock!");
        results.push(0);
        return results;
    }
    else if(player === "scissors" && computer === "paper") {
        results.push("Scissors beats Paper!");
        results.push(0);
        return results;
    }
}


function game(e) {

    let pickId = e.id;
    let playerChoice;
    let playerEmoji;
    if(pickId === "rockBtn") {
        playerChoice = "rock";
        playerEmoji = emoji[0];
    }
    else if(pickId === "paperBtn") {
        playerChoice = "paper";
        playerEmoji = emoji[1];
    }
    else {
        playerChoice = "scissors";
        playerEmoji = emoji[2];
    }
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(playerChoice)
    let result = playRound(playerChoice, computerChoice);

    console.log(result)
    if(result[1] == 0) {
        pScore++;
        whoWon.textContent = "You win!";
        howWon.textContent = result[0];
    }
    else if(result[1] == 1) {
        cScore++;
        whoWon.textContent = "You lose!";
        howWon.textContent = result[0];
    }
    else {
        whoWon.textContent = "It's a tie!";
        howWon.textContent = "You both chose the same option!";
    }

    playerSign.textContent = playerEmoji;
    computerSign.textContent = computerEmoji;
    playerScore.textContent = `Player: ${pScore}`;
    computerScore.textContent = `Computer: ${cScore}`;
    console.log("Player: " + pScore + " and Computer: " + cScore);
    if(pScore == 5) {
        playAgain.style.visibility = "visible";
        gameContainer.style.opacity = 0.3;
        messageAlertBox.textContent = "Congratulations! You won the game!";
        // alert("Congratulations! You won the game!");
        // reset();
    }
    else if(cScore == 5){
        playAgain.style.visibility = "visible";
        gameContainer.style.opacity = 0.3;
        messageAlertBox.textContent = "Oh no! You lost the game!!";
        // alert("Oh no! You lost the game!");
        // reset();
    }
}

function pressPlayAgain() {
    playAgain.style.visibility = "hidden";
    gameContainer.style.opacity = 1;
    reset();
}


function reset() {
    whoWon.textContent = "Choose your weapon!";
    howWon.textContent = "First to 5 points wins the game!";
    playerSign.textContent = emoji[3];
    computerSign.textContent = emoji[3];
    playerScore.textContent = "Player: 0";
    computerScore.textContent = "Computer: 0";
    pScore = 0;
    cScore = 0;
}


var buttonsCount = buttons.length;
for (var i = 0; i < buttonsCount; i += 1) {
    buttons[i].onclick = function() {
        game(this)
    };
}

playAgainBtn.addEventListener('click', pressPlayAgain);
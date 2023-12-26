// Checks if one of three choices is selected
function selectionChecker(playerSelection) {
    while(true) {
        if(playerSelection === "rock" || playerSelection === "paper" || 
            playerSelection === "scissors" ) {
            return playerSelection;
        } else {
            console.log("Please choose one from the three options provided");
            playerSelection = prompt("Please choose rock, paper, or scissors: ");
            true;
        }
    }
}

// Computer randomly makes a choice from three strings
function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * choice.length);
    console.log(index);
    let chosenString = choice[index];
    console.log(chosenString);
    return chosenString;
}

// Set variables to keep track of score
let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    /* If one of the following: user chooses rock and computer chooses scissors OR
    user chooses paper and computer chooses rock OR user chooses scissors and computer
    chooses paper, then... */
        // User wins. Your selection beats computer selection
        // Add one to user score.
    if( (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ) {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            userScore += 1;
    }

    /* If one of the following: user chooses rock and computer chooses paper OR user
    chooses paper and computer chooses scissors OR user chooses scissors and computer
    chooses rock, then... */
        // User loses. Computer selection beats your selection
        // Add one to computer score
    else if((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock") ) {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            computerScore += 1;
    }

    // If user and computer are tied
        // Play reround
    else {
        let playerSelection = prompt("Please choose rock, paper, or scissors: ");
        selectionChecker(playerSelection.toLowerCase());
    }
}

// Loop five times
// Game play program
// function game() {
function game() {
    let playerSelection = prompt("Please choose rock, paper, or scissors: ");
    if(playerSelection != null) {
        playerSelection = selectionChecker(playerSelection.toLowerCase());
        console.log(playerSelection);
        let computerSelection = getComputerChoice();
        // console.log(computerSelection);
        playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
    }
}
// }

const results = [];
for(i = 0; i < 5; i++) {
    results[i] = game();
    // console.log(results[i]);
}

// If user has more points than computer
    // Display message that user is the winner
if(userScore > computerScore) {
    console.log("User is the winner!");
}

// If computer has more points than user
    // Display message that computer is the winner
if(computerScore > userScore) {
    console.log("Computer is the winner!");
}
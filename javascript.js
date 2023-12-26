// Checks if one of three choices is selected
function selectionChecker(playerSelection) {
    while(true) {
        if(playerSelection === ( "rock" || "paper" || "scissors" )) {
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
    if( (userSelection === "rock" && computerChoice === "scissors") ||
        (userSelection === "paper" && computerChoice === "rock") ||
        (userSelection === "scissors" && computerChoice === "paper") ) {
            console.log("User wins! Your selection beats computer selection.");
            userScore += 1;
    }

    /* If one of the following: user chooses rock and computer chooses paper OR user
    chooses paper and computer chooses scissors OR user chooses scissors and computer
    chooses rock, then... */
        // User loses. Computer selection beats your selection
        // Add one to computer score
    else if( (userSelection === "rock" && computerChoice === "paper") ||
        (userSelection === "paper" && computerChoice === "scissors") ||
        (userSelection === "scissors" && computerChoice === "rock") ) {
            console.log("User loses! Computer selection beats your selection.");
            computerScore += 1;
    }

    // If user and computer are tied
        // Play reround
    else {
        let userSelection = prompt("Please choose rock, paper, or scissors: ");
        selectionChecker(userSelection.toLowerCase());
    }
}

// Loop five times
// Game play program
// function game() {
    for(let i = 0; i < 5; i ++) {
        let playerSelection = prompt("Please choose rock, paper, or scissors: ");
        selectionChecker(playerSelection.toLowerCase());
        console.log(playerSelection);
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
    }
// }

// let result = game();

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
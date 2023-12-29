// Checks if one of three choices is selected
function selectionChecker(playerSelection) {
    while(true) {
        if(playerSelection === "rock" || playerSelection === "paper" || 
            playerSelection === "scissors" ) {
            return playerSelection;
        } else {
            console.log("Please choose one from the three options provided");
            playerSelection = prompt("Please choose rock, paper, or scissors: ");
            playerSelection = playerSelection.toLowerCase();
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
            return userScore;
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
            return computerScore;
    }

    // If user and computer are tied
        // Play reround
    else {
        console.log("You and computer are tied. Please try again!");
        userScore += 0;
        computerScore += 0;
        game();
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
    } else {
        return null;
    }
}
// }

// Checks final score and announces the winner
function scoreChecker() {
    // If user has more points than computer
        // Display message that user is the winner
    if(userScore > computerScore) {
        let logMessage = console.log("User is the winner!");
        return logMessage;
    }

    // If computer has more points than user
        // Display message that computer is the winner
    if(computerScore > userScore) {
        let logMessage = console.log("Computer is the winner!");
        return logMessage;
    }
}

// Main program running
const results = [];
let i = 0;
while(i < 5) {
    results[i] = game();
    if(results[i] === null) {
        break;
    } else {
        if(results[i] == userScore) {
            userScore += 1;
        } else {
            computerScore += 1;
        }
    }

    i += 1;

    // console.log(results[i]);
    if(i == 5) {
        let finalResult = scoreChecker();
        console.log(finalResult);
    }
}
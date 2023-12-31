// Set variables to keep track of score
let userScore = 0;
let computerScore = 0;

// Checks if one of three choices is selected
function selectionChecker(playerSelection) {
    while(true) {
        if(playerSelection === "rock" || playerSelection === "paper" || 
            playerSelection === "scissors" ) {
            return playerSelection;
        } else {
            console.log("Please choose one from the three options provided");
            playerSelection = prompt("Please choose rock, paper, or scissors: ");
            // playerSelection = playerSelection.toLowerCase();
            if(playerSelection != null) {
                playerSelection = playerSelection.toLowerCase();
            } else {
                break;
            }
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

function playRound(playerSelection, computerSelection) {
    /* If one of the following: user chooses rock and computer chooses scissors OR
    user chooses paper and computer chooses rock OR user chooses scissors and computer
    chooses paper, then... */
        // User wins. Your selection beats computer selection
        // Add one to user score.
    if( (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ) {
            let userWinsMessage = `You Win! ${playerSelection} beats ${computerSelection}.`;
            console.log(userWinsMessage);
            return userWinsMessage;
    }

    /* If one of the following: user chooses rock and computer chooses paper OR user
    chooses paper and computer chooses scissors OR user chooses scissors and computer
    chooses rock, then... */
        // User loses. Computer selection beats your selection
        // Add one to computer score
    else if((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock") ) {
            let computerWinsMessage = `You Lose! ${computerSelection} beats ${playerSelection}.`;
            console.log(computerWinsMessage);
            return computerWinsMessage;
    }

    // If user and computer are tied
        // Play reround
    else {
        console.log("You and computer are tied. Please try again!");
        // userScore += 0;
        // computerScore += 0;
        playerSelection = undefined;
        computerSelection = undefined;
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
        if(playerSelection === undefined) {
            return null;
        }
        let computerSelection = getComputerChoice();
        // console.log(computerSelection);
        let result = playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
        if(result === "You Win! " + playerSelection.toLowerCase() + " beats " + computerSelection.toLowerCase() + ".") {
            userScore += 1;
        } else if(result === "You Lose! " + computerSelection.toLowerCase() + " beats " + playerSelection.toLowerCase() + ".") {
            computerScore += 1;
        } else {
            userScore += 0;
            computerScore += 0;
        }
    } else {
        return null;
    }
}
// }

// Main program running
// const results = [];
/* let i = 0;
while(i < 5) {
    let result = game();
    if(result === null) {
        break;
    } else {
        if(result == userWinsMessage) {
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
} */

let i = 0;
while(i < 5) {
    let result = game();

    i += 1;
    if(result === null) {
        break;
    }
        
    // console.log(results[i]);
    if(i == 5) {
        // Checks final score and announces the winner
        // function scoreChecker() {
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
        // }
    }
}
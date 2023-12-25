// Loop five times
    // Set variable for a list of choices
    const choice = ["Rock", "Paper", "Scissors"];

    // Prompt user to make a choice
    // try {
        let playerSelection = prompt("Please choose rock, paper, or scissors: ");
        selectionChecker(playerSelection.toLowerCase());

        function selectionChecker(playerChoice) {
            while(true) {
                if(playerChoice === ( "rock" || "paper" || "scissors" )) {
                    return playerChoice;
                } else {
                    console.log("Please choose one from the three options provided");
                    playerChoice = prompt("Please choose rock, paper, or scissors: ");
                    true;
                }
            }
        }

        console.log(playerSelection);
    // }
    /* catch(e) {
        console.error(e);
    } */

    // Computer randomly makes a choice
    let index = Math.floor(Math.random() * choice.length);
    console.log(index);
    let computerSelection = choice[index];
    console.log(computerSelection);

    /* If one of the following: user chooses rock and computer chooses scissors OR user
       chooses paper and computer chooses rock OR user chooses scissors and computer
       chooses paper, then... */
        // User wins. Your selection beats computer selection
        // Add one to user score.
    
    /* If one of the following: user chooses rock and computer chooses paper OR user
       chooses paper and computer chooses scissors OR user chooses scissors and computer
       chooses rock, then... */
        // User loses. Computer selection beats your selection
        // Add one to computer score
    // If user and computer are tied
        // Play reround

// If user has more points than computer
    // Display message that user is the winner
// If computer has more points than user
    // Display message that computer is the winner
function game() {

    let playerScore = 0;
    let computerScore = 0;

    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

    function playerWin() {
        console.log("You win!")
        playerScore += 1;
    }

    function computerWin() {
        console.log("You Lose!")
        computerScore += 1;
    }

    function tieGame() {
        console.log("It's a tie!")
    }


    function playRound() {

        let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

        console.log("Player chooses " + playerSelection + ".");

        let computerSelection;

        function getComputerChoice() {
            
            let randomNum = Math.floor((Math.random() * 3) + 1);
        
            if (randomNum === 1) {
                computerSelection = "rock";
            } else if (randomNum === 2) {
                computerSelection = "paper";
            } else {
                computerSelection = "scissors";
            }
        
            return(computerSelection);
        }

        console.log("Computer chooses " + getComputerChoice() + ".");

        if (computerSelection === "rock") {
    
            if (playerSelection === "rock") {
               return(tieText);
            } else if (playerSelection === "paper") {
                return(winningText);
            } else {
                return(losingText);
            }
    
        }
        
        if (computerSelection === "paper") {
    
            if (playerSelection === "rock") {
                return(losingText);
            } else if (playerSelection === "paper") {
                return(tieText);
            } else {
                return(winningText);
            }
    
        }
        
        if (computerSelection === "scissors") {
            
            if (playerSelection === "rock") {
                return(winningText);
            } else if (playerSelection === "paper") {
                return(losingText);
            } else {
                return(tieText);
            }
        }

    }

    console.log(playRound());

}

game();

/* SUDO:
Game needs to have 5 rounds.
    Call the playRound function 5 times.
    increase score of winner at end of each round
Need to keep score of both players as games progress.
    Need variable for each player score

Report a winner at the end.
*/
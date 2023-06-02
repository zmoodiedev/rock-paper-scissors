function game() {

    let playerScore = 0;
    let computerScore = 0;
    let computerSelection;
    let playerSelection;

    console.log("Your Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

    //Get player input
    function getPlayerChoice() {
        playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

        while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
            playerSelection = prompt('That\'s not an option. Rock, Paper, or Scissors?').toLowerCase();
        }

        console.log(playerSelection);
    }

    //Calculate computer random choice
    function getComputerChoice() {
                
        let randomNum = Math.floor((Math.random() * 3) + 1);
    
        if (randomNum === 1) {
            computerSelection = "rock";
        } else if (randomNum === 2) {
            computerSelection = "paper";
        } else {
            computerSelection = "scissors";
        }
    
        console.log('Computer chooses ' + computerSelection + ('.'));
        return(computerSelection);
    }

    function playerWin() {
        console.log("You win!")
        playerScore += 1;
        console.log(("The score is now ") + playerScore + (" points for you, ") + computerScore + (" points for the computer."));
    }

    function computerWin() {
        console.log("You Lose!")
        computerScore += 1;
        console.log(("The score is now ") + playerScore + (" points for you, ") + computerScore + (" points for the computer."));
    }

    function tieRound() {
        console.log("It's a tie! Try again!")
    }

    //Calculate winner of each round
    function chooseWinner() {

        if (computerSelection === "rock") {
    
            if (playerSelection === "rock") {
                tieRound();;
            } else if (playerSelection === "paper") {
                playerWin();
            } else {
                computerWin();
            }
    
        }
        
        if (computerSelection === "paper") {
    
            if (playerSelection === "rock") {
                computerWin();
            } else if (playerSelection === "paper") {
                tieRound();;
            } else {
                playerWin();
            }
    
        }
        
        if (computerSelection === "scissors") {
            
            if (playerSelection === "rock") {
                playerWin();
            } else if (playerSelection === "paper") {
                computerWin();
            } else {
                tieRound();;
            }
        }
    }

    // Set game over items
    function gameOver() {
        let winnerScore = Math.max(playerScore, computerScore);
        let winnerName;

        if (winnerScore === playerScore) {
            winnerName = "You";
        } else {
            winnerName = "Computer";
        }

        console.log(("Game over. ") +  winnerName + (" win with ") + winnerScore + (" points!"));
         return;
    }

    // Limit game to 5 rounds
    for (let step = 0; step < 5; step++) {
        
        function playRound() {
            getPlayerChoice();
            getComputerChoice();
            chooseWinner();
        }

        playRound();
    }

    //Begin end sequence of game
    gameOver();

}

//Initialize game
game();
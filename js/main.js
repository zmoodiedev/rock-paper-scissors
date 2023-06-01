function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3) + 1;

    if (computerSelection === 1) {
        return("Rock");
    } else if (computerSelection === 2) {
        return("Paper");
    } else {
        return("Scissors");
    }
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

/* SUDO:
NEED TO RETURN RANDOM CHOICE. Either Rock, Paper, or Scissors

*/
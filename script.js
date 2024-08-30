// Rock, paper, scissors
// Luis Garza Gómez

let humanScore, computerScore;
humanScore = 0;
computerScore = 0;

playGame();

function playGame() {
    let humanChoice, computerChoice;
    for (let i = 1; i <= 5; i++) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        console.log("Round " + i);
        playRound(humanChoice, computerChoice);
    }

    if(computerScore > humanScore) {
        console.log("Computer wins the game!!!");
    }
    else if(humanScore > computerScore) {
        console.log("Congratulations. You win the game!!!");
    }
    else {
        console.log("It's a Draw!!!");
    }
}
// Function to get the computer's choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
// Function to get the human's choice
function getHumanChoice() {
    let strOption = prompt("Choose: Rock, Paper, or Scissors");
    let strOption2 = strOption.toLocaleLowerCase();
    let option = -1;
    switch (strOption2) {
        case "rock":
            option = 0;
            break;
        case "paper":
            option = 1;
            break;
        case "scissors":
            option = 2;
            break;
        default:
            break;
    }
    return option;
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        humanScore++;
        computerScore++;
        console.log("Draw!\nYou: " + humanScore + " Computer: " + computerScore);
    }
    else if((humanChoice == 0 && computerChoice == 2) || 
    (humanChoice == 1 && computerChoice == 0) || 
    (humanChoice == 2 && computerChoice == 1)) {
        humanScore++;
        console.log("You win the round!\nYou: " + humanScore + " Computer: " + computerScore);
    }
    else if((humanChoice == 0 && computerChoice == 1) ||
    (humanChoice == 1 && computerChoice == 2) ||
    (humanChoice == 2 && computerChoice == 0)) {
        computerScore++;
        console.log("The computer wins the round!\nYou: " + humanScore + " Computer: " + computerScore);
    }

}

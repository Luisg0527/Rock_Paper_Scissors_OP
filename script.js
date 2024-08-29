// Rock, paper, scissors
// Luis Garza Gómez

// Function to get the computer's choice
function getCumputerChoice() {
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
        console.log("Draw!");
    }
    else if((humanChoice == 0 && computerChoice == 2) || 
    (humanChoice == 1 && computerChoice == 0) || 
    (humanChoice == 2 && computerChoice == 1)) {
        humanScore++;
        console.log("You win the round!");
    }
    else if((humanChoice == 0 && computerChoice == 1) ||
    (humanChoice == 1 && computerChoice == 2) ||
    (humanChoice == 2 && computerChoice == 0)) {
        computerScore++;
        console.log("The computer wins the round!");
    }

}

function playGame() {
    let humanScore, computerScore;
    humanScore = 0;
    computerScore = 0;

    let humanChoice, computerChoice;
    for (let i = 0; i < 5; index++) {
        humanChoice = getCumputerChoice();
        computerChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    
}
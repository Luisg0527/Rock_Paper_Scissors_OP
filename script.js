// Rock, paper, scissors
// Luis Garza Gómez

let humanScore, computerScore, round;
humanScore = 0;
computerScore = 0;
round = 1;

const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");

function playGame(humanChoice) {
    let computerChoice;
    if (round < 5) {
        computerChoice = getComputerChoice();
        //console.log("Round " + round);
        playRound(humanChoice, computerChoice);
        round++;
    }
    else if (round == 5) {
        computerChoice = getComputerChoice();
        //console.log("Round " + round);
        playRound(humanChoice, computerChoice);
        if(computerScore > humanScore) {
            console.log("Computer wins the game!!!");
        }
        else if(humanScore > computerScore) {
            console.log("Congratulations. You win the game!!!");
        }
        else {
            console.log("It's a Draw!!!");
        }
        humanScore = 0;
        computerScore = 0;
        round = 1;
    }
}
// Function to get the computer's choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        humanScore++;
        computerScore++;

        console.log("Draw!\nYou: " + humanScore + " Computer: " + computerScore);
        humanScoreDisplay.textContent = "Score " + humanScore;
        computerScoreDisplay.textContent = "Score " + computerScore;
    }
    else if((humanChoice == 0 && computerChoice == 2) || 
    (humanChoice == 1 && computerChoice == 0) || 
    (humanChoice == 2 && computerChoice == 1)) {
        humanScore++;
        console.log("You win the round!\nYou: " + humanScore + " Computer: " + computerScore);
        humanScoreDisplay.textContent = "Score " + humanScore;
        computerScoreDisplay.textContent = "Score " + computerScore;
    }
    else if((humanChoice == 0 && computerChoice == 1) ||
    (humanChoice == 1 && computerChoice == 2) ||
    (humanChoice == 2 && computerChoice == 0)) {
        computerScore++;
        console.log("The computer wins the round!\nYou: " + humanScore + " Computer: " + computerScore);
        humanScoreDisplay.textContent = "Score " + humanScore;
        computerScoreDisplay.textContent = "Score " + computerScore;
    }

}

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => {
    playGame(0);
});    
const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
    playGame(1);
});
const scissorBtn = document.querySelector("#scissorsBtn");
scissorBtn.addEventListener("click", () => {
    playGame(2);
});
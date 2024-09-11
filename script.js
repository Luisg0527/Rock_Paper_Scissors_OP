// Rock, paper, scissors
// Luis Garza Gómez

let humanScore, computerScore, round;
humanScore = 0;
computerScore = 0;
round = 1;

const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const h2Message = document.querySelector("#h2Message");

function playGame(humanChoice) {
    let computerChoice;
    if (round < 5) {
        h2Message.textContent = "";
        computerChoice = getComputerChoice();
        //console.log("Round " + round);
        playRound(humanChoice, computerChoice);
        round++;
    }
    else if (round == 5) {
        computerChoice = getComputerChoice();
        //console.log("Round " + round);
        playRound(humanChoice, computerChoice);
        h2Message.style.cssText = "color: yellow";
        if(computerScore > humanScore) {
            console.log("Computer wins the game!!!");
            h2Message.textContent = "Computer wins the game!!!";
        }
        else if(humanScore > computerScore) {
            console.log("Congratulations. You win the game!!!");
            h2Message.textContent = "Congratulations. You win the game!!!";
            
        }
        else {
            console.log("It's a Draw!!!");
            h2Message.textContent = "It's a Draw!!!";
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
    h2Message.style.cssText = "color: black";
    if(humanChoice == computerChoice) {
        humanScore++;
        computerScore++;

        h2Message.textContent = "Round " + round + ": Draw!";
        console.log("Draw!\nYou: " + humanScore + " Computer: " + computerScore);
        humanScoreDisplay.textContent = "Score " + humanScore;
        computerScoreDisplay.textContent = "Score " + computerScore;
    }
    else if((humanChoice == 0 && computerChoice == 2) || 
    (humanChoice == 1 && computerChoice == 0) || 
    (humanChoice == 2 && computerChoice == 1)) {
        humanScore++;

        h2Message.textContent = "Round " + round + ": You win!";
        console.log("You win the round!\nYou: " + humanScore + " Computer: " + computerScore);
        humanScoreDisplay.textContent = "Score " + humanScore;
        computerScoreDisplay.textContent = "Score " + computerScore;
    }
    else if((humanChoice == 0 && computerChoice == 1) ||
    (humanChoice == 1 && computerChoice == 2) ||
    (humanChoice == 2 && computerChoice == 0)) {
        computerScore++;

        h2Message.textContent = "Round " + round + ": The computer wins!";
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
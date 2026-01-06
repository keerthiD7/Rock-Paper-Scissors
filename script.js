function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    const userInput = prompt("Enter rock, paper, or scissors:");
    return userInput.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It is a tie!");
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

// play one round
const human = getHumanChoice();
const computer = getComputerChoice();

playRound(human, computer);

console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore);

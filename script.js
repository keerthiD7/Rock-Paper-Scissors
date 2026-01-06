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

for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanChoice = getHumanChoice();       // recall function
    const computerChoice = getComputerChoice(); // recall function
    playRound(humanChoice, computerChoice);
  }

  // declare final winner
  console.log("Final Score:");
  console.log("Human:", humanScore);
  console.log("Computer:", computerScore);

  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 The game is a tie!");
  }

// start the game
playGame();
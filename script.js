const playerScoreEl = document.querySelector("#playerScore");
const playerChoiceEl = document.querySelector("#playerChoice");
const computerScoreEl = document.querySelector("#computerScore");
const computerChoiceEl = document.querySelector("#computerChoice");
const resultText = document.querySelector("#resultText");

const playerRock = document.querySelector("#playerRock");
const playerPaper = document.querySelector("#playerPaper");
const playerScissors = document.querySelector("#playerScissors");
const playerLizard = document.querySelector("#playerLizard");
const playerSpock = document.querySelector("#playerSpock");

const computerRock = document.querySelector("#computerRock");
const computerPaper = document.querySelector("#computerPaper");
const computerScissors = document.querySelector("#computerScissors");
const computerLizard = document.querySelector("#computerLizard");
const computerSpock = document.querySelector("#computerSpock");

const reset = document.querySelector(".reset-icon");

const allGameIcons = document.querySelectorAll(".far");

let computerChoice = "";
let playerScoreNumber = 0;
let computerScoreNumber = 0;

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

// Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = "rock";
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = "paper";
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = "scissors";
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
}

// Reset 'selected' class
function resetSelected() {
  allGameIcons.forEach((item) => item.classList.remove("selected"));
}

// Reset score & playerChoice/computerChoice
function resetAll() {
  playerScoreNumber = computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
  resultText.textContent = "";
  resetSelected();
}

// Reset button
reset.addEventListener("click", resetAll);

// Add 'selected' styling & computer choice
function displayComputerChoice() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}
// Check result, increase scores, update resultText
function updateScore(playerChoice) {
  console.log(playerChoice, computerChoice);
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "You Won!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You Lost!";
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}
// Call functions to process turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// Add 'selected' styling & player choice
function select(playerChoice) {
  checkResult(playerChoice);
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}

// On startup, set initial value
resetAll();

const choices = ["rock", "paper", "scissors", "lizard", "spock"];

const playerDisplay = document.querySelector(".playerDisplay");
const computerDisplay = document.querySelector(".computerDisplay");
const resultDisplay = document.querySelector(".result");
const winsDisplay = document.querySelector(".wins");
const lossesDisplay = document.querySelector(".losses");
const drawsDisplay = document.querySelector(".draws");
const roundsDisplay = document.querySelector(".rounds");

let wins = 0,
    losses = 0,
    draws = 0,
    rounds = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]

    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
        draws += 1;
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors" || computerChoice === "lizard") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock" || computerChoice === "spock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper" || computerChoice === "lizard") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "lizard":
                result = (computerChoice === "paper" || computerChoice === "spock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "spock":
                result = (computerChoice === "rock" || computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;

        }
        
        result === "YOU WIN!" ? wins += 1 : losses += 1;
    }

    

    rounds += 1;

    playerDisplay.textContent = playerChoice;
    computerDisplay.textContent = computerChoice;
    resultDisplay.textContent = result;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawsDisplay.textContent = draws;
    roundsDisplay.textContent = rounds;

}
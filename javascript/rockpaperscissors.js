let playerScore = 0;
let computerScore = 0;

rock = document.querySelector('#rock');
paper = document.querySelector('#paper');
scisors = document.querySelector('#scissors');

rock.addEventListener('click', function() {
    playRound(rock.innerText);
});
paper.addEventListener('click', function() {
    playRound(paper.innerText);
});
scissors.addEventListener('click', function() {
    playRound(scissors.innerText);
});

// Gets random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// PC random throw
function computerPlay() {
    let randNum = getRandomInt(3);
    let computerHand;
    if (randNum == 0) {
        computerHand = 'rock';
    } else if (randNum == 1) {
        computerHand = 'paper'
    } else if  (randNum == 2) {
        computerHand = 'scissors';
    }
    return computerHand;
}

// Function that plays one round
function playRound(playerSelection, computerSelection) {
    const resultDiv = document.querySelector('#results');
    computerSelection = computerPlay();
    displayResults(playerSelection, computerSelection);
    let resultDisplay;

    console.log(playerScore);
    console.log(computerScore);

    if (playerScore == 5) {
        resultDisplay = document.createElement('h2')
        resultDisplay.textContent = `Player was the first to reach 5 points! You beat the computer by ${playerScore - computerScore} points.`;
        resultDiv.appendChild(resultDisplay);
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        resultDisplay = document.createElement('h2')
        resultDisplay.textContent = `Computer was the first to reach 5 points! The computer has beaten you by ${computerScore - playerScore} points.`;
        resultDiv.appendChild(resultDisplay);
        playerScore = 0;
        computerScore = 0;
    }
}

function displayResults(playerSelection, computerSelection) {
    let result;

    if (playerSelection == computerSelection) {
        result = document.createElement('p');
        result.textContent = `Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Draw!`;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        result = document.createElement('p');
        result.textContent = `Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Computer wins!`;
        computerScore++;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = document.createElement('p');
        result.textContent = `Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Player wins!`;
        playerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result = document.createElement('p');
        result.textContent = `Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Computer wins!`;
        computerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = document.createElement('p');
        result.textContent = `Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Player wins!`;
        playerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result = document.createElement('p');
        result.textContent = `Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Computer wins!`;
        computerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = document.createElement('p');
        result.textContent = `Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Player wins!`;
        playerScore++;
    } else {
        result = document.createElement('p');
        result.textContent = `${playerSelection} invalid. Please type \'rock\', \'paper\', or \'scissors\'.`;
    }

    console.log(result);

    const resultDiv = document.querySelector('#results');
    resultDiv.appendChild(result);
}


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

function createText(winner, loser) {

}

// Function that plays one round
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    let winner;

    if (playerSelection == computerSelection) {
        console.log(`Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Draw!`);
        winner = 'none';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log(`Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Computer wins!`);
        winner = 'computer';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        console.log(`Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Player wins!`);
        winner = 'player';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log(`Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Computer wins!`);
        winner = 'computer';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Player wins!`);
        winner = 'player';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log(`Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Computer wins!`);
        winner = 'computer';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log(`Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Player wins!`);
        winner = 'player';
    } else {
        console.log(`${playerSelection} invalid. Please type \'rock\', \'paper\', or \'scissors\'.`)
    }
    return winner;
}

const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('id', 'button-container');

document.querySelector('body').appendChild(buttonContainer);

const rock = document.createElement('button');
rock.textContent = 'rock';
const paper = document.createElement('button');
paper.textContent = 'paper';
const scissors = document.createElement('button');
scissors.textContent = 'scissors';

buttonContainer.appendChild(rock);
buttonContainer.appendChild(paper);
buttonContainer.appendChild(scissors);

rock.addEventListener('click', function() {
    playRound(rock.innerText);
});
paper.addEventListener('click', function() {
    playRound(paper.innerText);
});
scissors.addEventListener('click', function() {
    playRound(scissors.innerText);
});



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
function rpsRound(playerSelection, computerSelection) {
    playerSelection = prompt("What will you throw? \n");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        console.log(`Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Draw!`);
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log(`Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Computer wins!`);
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        console.log(`Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Player wins!`);
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log(`Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Computer wins!`);
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Player wins!`);
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log(`Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Computer wins!`);
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log(`Player has picked: ${playerSelection}, Computer has picked: ${computerSelection}. \n Result: Player wins!`);
    } else {
        console.log(`${playerSelection} invalid. Please type \'rock\', \'paper\', or \'scissors\'.`)
    }

}
rpsRound();
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
    playerSelection = prompt("What will you throw? \n");
    playerSelection = playerSelection.toLowerCase();
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
 
// Function to play 5 rounds of rps
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        winner = playRound();
        if (winner == 'player') {
            playerScore += 1;
        } else if (winner == 'computer') {
            computerScore += 1;
        } else {
            console.log('No points were added.')
        }
    }
    if (playerScore > computerScore) {
        console.log(`Player has won with a total score of ${playerScore}!`)
    } else if (playerScore < computerScore) {
        console.log(`Computer has won with a total score of ${playerScore}!`)
    } else {
        console.log(`Game ended in a tie.`)
    }
}

game();
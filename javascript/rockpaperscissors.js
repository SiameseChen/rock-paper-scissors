function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    let randNum = getRandomInt(3);
    let computerHand;
    if (randNum == 0) {
        computerHand = 'rock'
    } else if (randNum == 1) {
        computerHand = 'paper'
    } else if  (randNum == 2) {
        computerHand = 'scissors'
    }
    console.log(computerHand)
}
computerPlay();
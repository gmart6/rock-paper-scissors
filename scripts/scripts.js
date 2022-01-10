let playerSelection;
let computerSelection;

let playerWins = 0;
let computerWins = 0;

function game() {
    playerWins = 0;
    computerWins = 0;

    for (let i = 0; i < 5; i++) {       
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerWins > computerWins) {
        return `You win! ${playerWins} to ${computerWins}.`;
    } else if (playerWins < computerWins) {
        return `You lose! ${playerWins} to ${computerWins}.`;
    } else {
        return `It's a draw. ${playerWins} to ${computerWins}.`;
    }
}

function playerPlay() {
    while (true) {
        playerSelection = prompt('Will you play rock, paper, or scissors?');
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            alert('Invalid input. Please input "rock", "paper", or "scissors".');
            continue;
        }
        return playerSelection;
    }
}

function computerPlay() {
    let compSel = Math.floor((Math.random() * 3)) + 1;
    switch (compSel) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default:
            console.log('something went wrong with computerPlay');
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(computerSelection);
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerWins++;
            return 'You lose! Paper beats Rock.';
        } else if (computerSelection === 'scissors') {
            playerWins++;
            return 'You win! Rock beats Scissors.';
        } else {
            return 'It\'s a draw. Rock and Rock.'; 
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerWins++;
            return 'You lose! Scissors beats Paper.';
        } else if (computerSelection === 'rock') {
            playerWins++;
            return 'You win! Paper beats Rock.';
        } else {
            return 'It\'s a draw. Paper and Paper';
        }
    } else {
        if (computerSelection === 'rock') {
            computerWins++;
            return 'You lose! Rock beats Scissors.';
        } else if (computerSelection === 'paper') {
            playerWins++;
            return 'You win! Scissors beats Paper.';
        } else {
            return 'It\'s a draw. Scissors and Scissors.';
        }
    }
}

console.log(game());
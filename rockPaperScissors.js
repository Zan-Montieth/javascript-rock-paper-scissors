const ROCK = 0
const PAPER = 1
const SCISSORS = 2

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case ROCK :
            return "rock"
        case PAPER:
            return "paper"
        case SCISSORS:
            return "scissors"

    }
}

function stringToNumber(stringIn){
    switch(stringIn){
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}

function playRound(playerSelection, computerSelection) {
    let normalizedPlayerSelection = playerSelection.toLowerCase()
    // console.log(normalizedPlayerSelection);
    // console.log(stringToNumber(normalizedPlayerSelection))
    if(stringToNumber(normalizedPlayerSelection) == stringToNumber(computerSelection)){
        return "Round is a Tie"
    }else if(stringToNumber(normalizedPlayerSelection) == ROCK){
        if(stringToNumber(computerSelection) == PAPER){
            return "You Lose! Paper beats Rock"
        }else{
            return "You Win! Rock beats Scissors"
        }
    }else if(stringToNumber(normalizedPlayerSelection) == PAPER){
        if(stringToNumber(computerSelection) == SCISSORS){
            return "You Lose! Scissors beats Paper"
        }else{
            return "You Win! Paper beats Rock"
        }
    }else if(stringToNumber(normalizedPlayerSelection) == SCISSORS){
        if(stringToNumber(computerSelection) == ROCK){
            return "You Lose! Rock beats Scissors"
        }else{
            return "You Win! Scissors beats Paper"
        }
    }
}
   

const playerSelection = "PapeR";
const computerSelection = getComputerChoice();
console.log(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));
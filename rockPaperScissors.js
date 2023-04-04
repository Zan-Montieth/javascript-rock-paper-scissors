const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case ROCK:
            return "rock";
        case PAPER:
            return "paper";
        case SCISSORS:
            return "scissors";
    }
}

function stringToNumber(stringIn) {
    switch (stringIn) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}

function playRound() {
    // let normalizedPlayerSelection = playerSelection.toLowerCase();
    let normalizedPlayerSelection = this.id.toLowerCase();
    let computerSelection = getComputerChoice();
    let winGoesTo = null;
    if (
        stringToNumber(normalizedPlayerSelection) ==
        stringToNumber(computerSelection)
    ) {
        winGoesTo = "tie";
        // return "Round is a Tie";
    } else if (stringToNumber(normalizedPlayerSelection) == ROCK) {
        if (stringToNumber(computerSelection) == PAPER) {
            computerScore++;
            winGoesTo = "computer";
            // return "You Lose! Paper beats Rock";
        } else {
            playerScore++;
            winGoesTo = "player";
            // return "You Win! Rock beats Scissors";
        }
    } else if (stringToNumber(normalizedPlayerSelection) == PAPER) {
        if (stringToNumber(computerSelection) == SCISSORS) {
            computerScore++;
            winGoesTo = "computer";
            // return "You Lose! Scissors beats Paper";
        } else {
            playerScore++;
            winGoesTo = "player";
            // return "You Win! Paper beats Rock";
        }
    } else if (stringToNumber(normalizedPlayerSelection) == SCISSORS) {
        if (stringToNumber(computerSelection) == ROCK) {
            computerScore++;
            winGoesTo = "computer";
            // return "You Lose! Rock beats Scissors";
        } else {
            playerScore++;
            winGoesTo = "player";
            // return "You Win! Scissors beats Paper";
        }
    }
    updateInfo(normalizedPlayerSelection, computerSelection, winGoesTo);
}

function updateInfo(playerSelection, computerSelection, winGoesTo) {
    const humanImg = document.querySelector(".humanChoiceImg");
    const computerImg = document.querySelector(".computerChoiceImg");
    const humanScoreText = document.getElementsByClassName("humanScore");
    const computerScoreText = document.getElementsByClassName("computerScore");
    const winner = document.getElementsByClassName("winner")[0];
    const header = document.getElementsByClassName("results")[0];
    const subheader1 = document.getElementsByClassName("humanHeader")[0]
    const subheader2 = document.getElementsByClassName("computerHeader")[0]
    const footer = document.getElementsByClassName("playerOptions")[0];

    switch (playerSelection) {
        case "rock":
            humanImg.src = "Images/rock.png";
            break;
        case "paper":
            humanImg.src = "Images/paper.png";
            break;
        case "scissors":
            humanImg.src = "Images/SCISSORS.png";
            break;
    }
    switch (computerSelection) {
        case "rock":
            computerImg.src = "Images/rock.png";
            break;
        case "paper":
            computerImg.src = "Images/paper.png";
            break;
        case "scissors":
            computerImg.src = "Images/SCISSORS.png";
            break;
    }

    humanScoreText[0].innerHTML = "You Have " + playerScore + " Points";
    computerScoreText[0].innerHTML =
        "The Computer Has " + computerScore + " Points";
    if(playerScore == 5 || computerScore == 5){
        console.log("game done")
        humanImg.src = "";
        computerImg.src = "";
        winner.style.fontSize = "120px";
        winner.style.flexBasis = "100%"
        header.style.visibility = "hidden";
        header.style.flexBasis = "0px";
        footer.style.visibility = "hidden";
        subheader1.style.visibility = "hidden";
        subheader2.style.visibility = "hidden";
        
        if(playerScore == 5){
            winner.innerHTML = "You Won The Game!";
        }
        if(computerScore == 5){
            winner.innerHTML = "The Computer Won The Game!";
        }
        return
    }
    switch (winGoesTo) {
        case "tie":
            winner.innerHTML = "That round was a tie.";
            break;
        case "computer":
            winner.innerHTML = "Looks like the computer won that round.";
            break;
        case "player":
            winner.innerHTML = "You won that round!";
            break;
    }
}

function revealBoard() {
    const buttons = document.getElementsByTagName("button");
    const humanHeader = document.getElementsByClassName("humanHeader");
    const computerHeader = document.getElementsByClassName("computerHeader");

    console.log("reveal board called");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].removeEventListener("click", revealBoard);
    }
    console.log(humanHeader);
    humanHeader[0].style.visibility = "visible";
    computerHeader[0].style.visibility = "visible";
}

function updateBoard() {}

function game() {
    for (i = 0; i < 5; i++) {
        let gameResult = playRound(
            prompt("choose Rock, Paper, or Scissors: "),
            getComputerChoice()
        );
        if (gameResult[4] == "W") {
            playerScore++;
        }
        if (gameResult[4] == "L") {
            computerScore++;
        }
        console.log(gameResult);
    }
    if (playerScore < computerScore) {
        console.log("computer wins the game!");
    }
    if (playerScore > computerScore) {
        console.log("player wins the game!");
    }
    if (playerScore == computerScore) {
        console.log("game ends in a draw");
    }
    return;
}

function onStart() {
    const buttons = document.getElementsByTagName("button");

    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", playRound);
        buttons[i].addEventListener("click", revealBoard, { once: true });
    }
}

// const playerSelection = "PapeR";
// const computerSelection = getComputerChoice();
// console.log(playerSelection, computerSelection);
// console.log(playRound(playerSelection, computerSelection));

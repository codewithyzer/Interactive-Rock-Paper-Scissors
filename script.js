const playerRockButton = document.getElementById("rock-player");
const playerPaperButton = document.getElementById("paper-player");
const playerScissorButton = document.getElementById("scissor-player");
const computerChoseRock = document.getElementById("rock-computer");
const computerChosePaper = document.getElementById("paper-computer");
const computerChoseScissor = document.getElementById("scissor-computer");

const youWon = document.querySelector("#won");
const youLose = document.querySelector("#lose")
const draw = document.querySelector("#draw");
const restartButton = document.querySelector("#restart");
const playerWins = document.querySelector("#player-wins");
const computerWins = document.querySelector("#computer-wins");

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

const helpButton = document.querySelector("#help");
const closeButton = document.querySelector("#close-button");
const instructions = document.querySelector("#instruction");

let scoreOfPlayer = 0;
let scoreOfComputer = 0;
playerScore.innerText = scoreOfPlayer;
computerScore.innerText = scoreOfComputer;

function displayChoice(choice) {
    if (choice === "rock") {
        computerChoseRock.style.color = "rgb(40, 40, 40)";
        computerChosePaper.style.color = "whitesmoke";
        computerChoseScissor.style.color = "whitesmoke";
        return choice;
    } else if (choice === "paper") {
        computerChoseRock.style.color = "whitesmoke";
        computerChosePaper.style.color = "rgb(40, 40, 40)";
        computerChoseScissor.style.color = "whitesmoke";
        return choice;
    } else {
        computerChoseRock.style.color = "whitesmoke";
        computerChosePaper.style.color = "whitesmoke";
        computerChoseScissor.style.color = "rgb(40, 40, 40)";
        return choice;
    }
}

function displayAutoplayChoice(choice) {
    if (choice === "rock") {
        playerRockButton.style.color = "rgb(40, 40, 40)";
        playerPaperButton.style.color = "whitesmoke";
        playerScissorButton.style.color = "whitesmoke";
        return choice;
    } else if (choice === "paper") {
        playerRockButton.style.color = "whitesmoke";
        playerPaperButton.style.color = "rgb(40, 40, 40)";
        playerScissorButton.style.color = "whitesmoke";
        return choice;
    } else {
        playerRockButton.style.color = "whitesmoke";
        playerPaperButton.style.color = "whitesmoke";
        playerScissorButton.style.color = "rgb(40, 40, 40)";
        return choice;
    }
}

function computerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return displayChoice(choice);
}

function computerPlayerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return displayAutoplayChoice(choice);
}

function hasPlayerWon(player, computer) {
    if (player === "rock" && computer === "scissor") {
        return true;
    } else if (player === "paper" && computer === "rock") {
        return true;
    } else if (player === "scissor" && computer === "paper") {
        return true;
    } else {
        return false;
    }
};

function roundResults(userOption) {
    const computerOption = computerChoice();
    console.log(userOption);
    console.log(computerOption);
    if (hasPlayerWon(userOption, computerOption)) {
        youWon.style.display = "block"
        youLose.style.display = "none"
        draw.style.display = "none"
        scoreOfPlayer++;
        playerScore.innerText = scoreOfPlayer;
    } else if (userOption === computerOption) {
        draw.style.display = "block"
        youWon.style.display = "none"
        youLose.style.display = "none"
    } else {
        draw.style.display = "none"
        youWon.style.display = "none"
        youLose.style.display = "block"
        scoreOfComputer++;
        computerScore.innerText = scoreOfComputer;
    } 
}

function rock() {
    playerRockButton.style.color = "rgb(40, 40, 40)";
    playerPaperButton.style.color = "whitesmoke";
    playerScissorButton.style.color = "whitesmoke";
    playerWins.style.display = "none";
    computerWins.style.display = "none";
};

function paper() {
    playerRockButton.style.color = "whitesmoke";
    playerPaperButton.style.color = "rgb(40, 40, 40)";
    playerScissorButton.style.color = "whitesmoke";
    playerWins.style.display = "none";
    computerWins.style.display = "none";
}

function scissor() {
    playerRockButton.style.color = "whitesmoke";
    playerPaperButton.style.color = "whitesmoke";
    playerScissorButton.style.color = "rgb(40, 40, 40)";
    playerWins.style.display = "none";
    computerWins.style.display = "none";
}

function restart() {
    scoreOfPlayer = 0;
    playerScore.innerText = scoreOfPlayer;

    scoreOfComputer = 0;
    computerScore.innerText = 0;

    draw.style.display = "none"
    youWon.style.display = "none"
    youLose.style.display = "none"
    playerWins.style.display = "none";
    computerWins.style.display = "none";
    playerRockButton.style.color = "whitesmoke";
    playerPaperButton.style.color = "whitesmoke";
    playerScissorButton.style.color = "whitesmoke";
    computerChoseRock.style.color = "whitesmoke";
    computerChosePaper.style.color = "whitesmoke";
    computerChoseScissor.style.color = "whitesmoke";
};

function playerWinsGame() {
    playerWins.style.display = "block";
    computerWins.style.display = "none";
}

function computerWinsGame() {
    playerWins.style.display = "none";
    computerWins.style.display = "block";
}

function endGame() {
    if (scoreOfPlayer === 5||scoreOfComputer === 5) {
        restart();
        scoreOfPlayer === 5 ? playerWinsGame():computerWinsGame()
    }
};

function viewHelp() {
    instructions.style.display = "block"
};

function closeHelp() {
    instructions.style.display = "none"
}

const autoPlayButton = document.querySelector("#autoplay");
let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        isAutoPlaying = true;
        intervalId = setInterval(function() {
            roundResults(computerPlayerChoice());
            autoPlayButton.innerHTML = "Auto-playing";
            autoPlayButton.style.backgroundColor = "rgb(121, 255, 121)";
            autoPlayButton.style.color = "black";
        }, 1000);
    } else {
        isAutoPlaying = false
        clearInterval(intervalId);
        autoPlayButton.innerHTML = "Autoplay";
        autoPlayButton.style.backgroundColor = "whitesmoke";
        autoPlayButton.style.color = "black";
        draw.style.display = "none"
        youWon.style.display = "none"
        youLose.style.display = "none"
        playerWins.style.display = "none";
        computerWins.style.display = "none";
        playerRockButton.style.color = "whitesmoke";
        playerPaperButton.style.color = "whitesmoke";
        playerScissorButton.style.color = "whitesmoke";
        computerChoseRock.style.color = "whitesmoke";
        computerChosePaper.style.color = "whitesmoke";
        computerChoseScissor.style.color = "whitesmoke";
    }
}

autoPlayButton.addEventListener("click", function() {
    autoPlay();
});

helpButton.onclick = viewHelp;
closeButton.onclick = closeHelp;

playerRockButton.addEventListener("click", function() {
    roundResults(playerRockButton.value), rock(), endGame()
});
playerPaperButton.addEventListener("click", function() {
    roundResults(playerPaperButton.value), paper(), endGame()
});
playerScissorButton.addEventListener("click", function() {
    roundResults(playerScissorButton.value), scissor(), endGame()
});

restartButton.addEventListener("click", function() {
    restart()
});

document.body.addEventListener("keydown", (event) => {
    if (event.key === "a") {
        autoPlay();
    } else if (event.key === "Backspace") {
        restart();
    }
});
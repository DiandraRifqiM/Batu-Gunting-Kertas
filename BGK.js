const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  // Function to
  const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ["rock", "paper", "scissors"];

    // Function to start playing game
    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const movesLeft = document.querySelector(".movesleft");
        moves++;
        movesLeft.innerText = `Tersisa: ${10 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        // Function to check who wins
        winner(this.innerText, computerChoice);

        // Calling gameOver function after 10 moves
        if (moves == 10) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
  };

  // Function to decide winner
  const winner = (player, computer) => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".p-count");
    const computerScoreBoard = document.querySelector(".c-count");
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
      result.textContent = "Seri";
    } else if (player == "rock") {
      if (computer == "paper") {
        result.textContent = "Komputer Won";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Menang";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "scissors") {
      if (computer == "rock") {
        result.textContent = "Komputer Menang";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Menang";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "paper") {
      if (computer == "scissors") {
        result.textContent = "Komputer Menang";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Menang";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
  };

  // Function to run when game is over
  const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector(".move");
    const result = document.querySelector(".result");
    const reloadBtn = document.querySelector(".reload");

    playerOptions.forEach((option) => {
      option.style.display = "none";
    });

    chooseMove.innerText = "Game Selesai!!";
    movesLeft.style.display = "none";

    if (playerScore > computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "Kamu Menang";
      result.style.color = "#308D46";
    } else if (playerScore < computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "Kamu Kalah";
      result.style.color = "red";
    } else {
      result.style.fontSize = "2rem";
      result.innerText = "Seri";
      result.style.color = "grey";
    }
    reloadBtn.innerText = "Restart";
    reloadBtn.style.display = "flex";
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };

  // Calling playGame function inside game
  playGame();
};

// Calling the game function
game();

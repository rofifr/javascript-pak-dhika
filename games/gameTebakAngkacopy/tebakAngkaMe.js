let randomNumber;
let chances = 6;
let timeLeft = 30;
let timer;

function startGame() {
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
  generateRandomNumber();
  startTimer();
}

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 30) + 1;
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      endGame(false);
    }
  }, 1000);
}

function submitGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);

  if (isNaN(guess) || guess < 1 || guess > 30) {
    alert("Masukkan angka antara 1 dan 30!");
    return;
  }

  chances--;

  if (guess === randomNumber) {
    endGame(true, "Selamat, Kamu menebak dengan BENAR!!");
  } else if (chances === 0) {
    endGame(false, "Maaf, Kamu KALAH!!");
  }
}

function endGame(isWinner, message) {
  clearInterval(timer);
  document.getElementById("result").innerHTML = message;
  document.getElementById("popup-message").innerHTML = "Mau coba bermain lagi?";
  document.getElementById("popup").style.display = "block";
}

function playAgain() {
  chances = 6;
  timeLeft = 30;
  document.getElementById("guessInput").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("popup").style.display = "none";
  generateRandomNumber();
  startTimer();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

window.onload = function () {
  document.getElementById("popup").style.display = "none";
};

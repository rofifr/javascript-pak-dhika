let mulaiBermain = false;
let jmlKesempatan = 6;
let angkaKomputer = generateRandomNumber();
let waktu = 30000; // 30 detik dalam milidetik
let timer;
let gameOver = false;

function generateRandomNumber() {
  return Math.floor(Math.random() * 30) + 1;
}

function displayMessage(message) {
  document.getElementById("result").innerText = message;
}

function submitGuess(event) {
  // Mencegah perilaku default formulir
  if (event) {
    event.preventDefault();
  }

  if (!mulaiBermain || gameOver) {
    // Jika permainan belum dimulai atau sudah berakhir, reset permainan
    resetGame();
    mulaiBermain = true;
    gameOver = false;
    startTimer();
  }

  if (jmlKesempatan > 0) {
    let angkaTebakan = parseInt(document.getElementById("guess").value);

    if (isNaN(angkaTebakan) || angkaTebakan < 1 || angkaTebakan > 30) {
      displayMessage("Angka tebakan harus berada antara 1 dan 30.");
    } else {
      checkGuess(angkaTebakan);
    }

    // Perbarui timer setiap kali tebakan diajukan
    startTimer();
  }
}

function checkGuess(angkaTebakan) {
  if (angkaTebakan === angkaKomputer) {
    displayMessage("Selamat, kamu menebak dengan BENAR!!");
    showPopup("Mau coba bermain lagi?");
  } else {
    jmlKesempatan--;
    displayMessage(
      angkaTebakan < angkaKomputer
        ? `Angka yang harus ditebak lebih besar dari ${angkaTebakan}. Kamu mempunyai kesempatan ${jmlKesempatan} kali lagi. Tebaklah dengan benar.`
        : `Angka yang harus ditebak lebih kecil dari ${angkaTebakan}. Kamu mempunyai kesempatan ${jmlKesempatan} kali lagi. Tebaklah dengan benar.`
    );

    if (jmlKesempatan === 0) {
      displayMessage("Maaf, kamu KALAH!!");
      showPopup("Mau bermain lagi?");
      clearInterval(timer); // Hentikan timer ketika pengguna kalah
    }
  }
}

function resetGame() {
  // Hentikan timer sebelumnya jika ada
  clearInterval(timer);

  if (mulaiBermain) {
    angkaKomputer = generateRandomNumber();
    jmlKesempatan = 6;
    displayMessage("");
    document.getElementById("guess").value = "";
    waktu = 30000; // Reset waktu ke nilai semula
    // Memulai timer setelah game direset
    startTimer();
  }

  // Hanya tampilkan pop-up jika permainan berakhir
  if (gameOver) {
    showPopup("Terima kasih sudah bermain.");
  }

  // Atur ulang gameOver ke false
  gameOver = false;
}

function showPopup(message) {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = message;

  const buttonYa = document.createElement("button");
  buttonYa.textContent = "Ya";
  buttonYa.addEventListener("click", () => {
    popup.remove();
    mulaiBermain = true;
    resetGame();
    // Memulai kembali timer setelah game direset
    startTimer();
  });

  const buttonTidak = document.createElement("button");
  buttonTidak.textContent = "Tidak";
  buttonTidak.addEventListener("click", () => {
    popup.remove();
    mulaiBermain = false;
  });

  popup.appendChild(buttonYa);
  popup.appendChild(buttonTidak);

  document.body.appendChild(popup);
}

function startTimer() {
  // Hentikan timer sebelumnya jika ada
  clearInterval(timer);

  // Update timer every millisecond
  timer = setInterval(() => {
    const seconds = Math.floor(waktu / 1000);
    const milliseconds = waktu % 1000;

    document.getElementById("waktu").innerText = `${seconds}.${milliseconds}`;

    if (waktu <= 0) {
      // Timer has expired
      clearInterval(timer);
      displayMessage("Waktu habis! Kamu kalah!");
      showPopup("Mau coba bermain lagi?");
    } else {
      waktu -= 10; // Kurangi waktu setiap 10 milidetik
    }

    // Hentikan timer jika pemain sudah kehabisan kesempatan
    if (jmlKesempatan === 0) {
      clearInterval(timer);
    }
  }, 10);
}

// Start timer when player submits the first guess
document
  .getElementById("submit-button")
  .addEventListener("click", function (event) {
    submitGuess(event);
  });

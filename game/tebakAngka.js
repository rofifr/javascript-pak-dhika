let mauBermain = true;
alert(
  "Selamat datang.\nIni adalah GAME TEBAK ANGKA. Kamu diminta untuk menebak angka 1-20 yang secara random dipilih oleh komputer."
);

while (mauBermain) {
  let angkaRandom = parseInt(Math.random() * 20) + 1;
  console.log(angkaRandom);
  let kesempatan = 5;
  let awalan = "Silahkan masukkan angka 1-20 :";

  while (kesempatan > 0) {
    let angka = prompt(awalan);

    if (angka == "") {
      kesempatan--;
      awalan =
        "Kamu belum menebak. Silahkan masukkan angka 1-20.\nKesempatan menebakmu tinggal " +
        kesempatan +
        ".";
    } else if (parseInt(angka)) {
      if (angka == angkaRandom) {
        alert("Selamat kamu MENANG!");
        mauBermain = confirm("Mau main lagi?");
        break;
      } else if (angka < angkaRandom) {
        kesempatan--;
        awalan =
          "Angka pilihan komputer lebih besar dari " +
          angka +
          ".\nKesempatan menebakmu tinggal " +
          kesempatan +
          ".";
      } else if (angka > angkaRandom) {
        kesempatan--;
        awalan =
          "Angka pilihan komputer lebih kecil dari " +
          angka +
          ".\nKesempatan menebakmu tinggal " +
          kesempatan +
          ".";
      }
    } else if (angka) {
      kesempatan--;
      awalan =
        "Yang kamu masukkan salah. Silahkan masukkan angka 1-20.\nKesempatan menebakmu tinggal " +
        kesempatan +
        ".";
    } else {
      let keluar = confirm("Yakin mau keluar?");
      if (keluar) {
        mauBermain = false;
        break;
      }
    }
  }

  if (kesempatan == 0) {
    alert("Kamu KALAH!");
    mauBermain = confirm("Mau main lagi?");
  }

  if (mauBermain) {
    mauBermain = true;
  } else {
    mauBermain = false;
  }
}

alert("Terima kasih sudah bermain.");
mauBermain = true;
alert(
  "Selamat datang.\nIni adalah GAME TEBAK ANGKA. Kamu diminta untuk menebak angka 1-20 yang secara random dipilih oleh komputer."
);

while (mauBermain) {
  let angkaRandom = parseInt(Math.random() * 20) + 1;
  console.log(angkaRandom);
  let kesempatan = 5;
  let awalan = "Silahkan masukkan angka 1-20 :";

  while (kesempatan > 0) {
    let angka = prompt(awalan);

    if (angka == "") {
      kesempatan--;
      awalan =
        "Kamu belum menebak. Silahkan masukkan angka 1-20.\nKesempatan menebakmu tinggal " +
        kesempatan +
        ".";
    } else if (parseInt(angka)) {
      if (angka == angkaRandom) {
        alert("Selamat kamu MENANG!");
        mauBermain = confirm("Mau main lagi?");
        break;
      } else if (angka < angkaRandom) {
        kesempatan--;
        awalan =
          "Angka pilihan komputer lebih besar dari " +
          angka +
          ".\nKesempatan menebakmu tinggal " +
          kesempatan +
          ".";
      } else if (angka > angkaRandom) {
        kesempatan--;
        awalan =
          "Angka pilihan komputer lebih kecil dari " +
          angka +
          ".\nKesempatan menebakmu tinggal " +
          kesempatan +
          ".";
      }
    } else if (angka) {
      kesempatan--;
      awalan =
        "Yang kamu masukkan salah. Silahkan masukkan angka 1-20.\nKesempatan menebakmu tinggal " +
        kesempatan +
        ".";
    } else {
      let keluar = confirm("Yakin mau keluar?");
      if (keluar) {
        mauBermain = false;
        break;
      }
    }
  }

  if (kesempatan == 0) {
    alert("Kamu KALAH!");
    mauBermain = confirm("Mau main lagi?");
  }

  if (mauBermain) {
    mauBermain = true;
  } else {
    mauBermain = false;
  }
}

alert("Terima kasih sudah bermain.");

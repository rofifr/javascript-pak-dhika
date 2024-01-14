let mulaiBermain = true;
alert(
  "Selamat datang \nIni adalah game tebak angka, kamu harus menebak angka 1-30 dengan angka yang ditentukan oleh komputer.\nKamu diberikan kesempatan sebanyak 6 kali kesempatan.\nJadi berhati-hatilah, dan tebaklah dengan benar!."
);

while (mulaiBermain) {
  let angkaKomputer = parseInt(Math.random() * 30) + 1;
  console.log("Jangan Curang");
  let jmlKesempatan = 6;
  let mulai = "Masukkan angka tebakan 1-30:";

  while (jmlKesempatan > 0) {
    let angkaTebakan = prompt(mulai);

    if (angkaTebakan == "") {
      mulai =
        "Kamu belum memasukkan angka tebakan, angka tebakan harus bernilai 1-30 \nSilahkan masukkan angka tebakan dengan benar. \nKamu mempunya kesempatan " +
        jmlKesempatan +
        " kali lagi. \nMasukkan angka tebakan dengan benar!.";
    } else if (parseInt(angkaTebakan)) {
      if (angkaTebakan == angkaKomputer) {
        alert("Selamat, kamu menebak dengan BENAR!!");
        mulaiBermain = confirm("Mau coba bermain lagi?");
        break;
      } else if (angkaTebakan < angkaKomputer) {
        jmlKesempatan--;
        mulai =
          "Angka yang harus ditebak lebih besar dari " +
          angkaTebakan +
          ",\nkamu mempunyai kesempatan " +
          jmlKesempatan +
          " kali lagi. \nTebaklah dengan benar.";
      } else if (angkaTebakan > angkaKomputer) {
        jmlKesempatan--;
        mulai =
          "Agka yang harus ditebak lebih kecil dari " +
          angkaTebakan +
          "\nkamu mempunyai kesempatan " +
          jmlKesempatan +
          " kali lagi. \nTebaklah dengan benar.";
      }
    } else if (angkaTebakan) {
      jmlKesempatan--;
      mulai =
        "Angka yang kamu masukkan salah, angka tebakan harus bernilai 1-30 \nSilahkan masukkan angka tebakan dengan benar.\nKamu mempunya kesempatan " +
        jmlKesempatan +
        " kali lagi. Masukkan angka tebakan dengan benar!.";
    } else {
      let selesai = confirm("Yakin mau keluar?");
      if (selesai) {
        mulaiBermain = false;
        break;
      }
    }
  }

  if (jmlKesempatan == 0) {
    alert("Maaf kamu KALAH!!");
    mulaiBermain = confirm("Mau bermain lagi?");
  }

  if (mulaiBermain) {
    mulaiBermain = true;
  } else {
    mulaiBermain = false;
  }
}

alert("Terimakasih sudah bermain");

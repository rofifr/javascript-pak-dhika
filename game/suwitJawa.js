let tanya = true;
while (tanya) {
  // menangkap pilihan player
  let p = prompt("pilih: semut, orang, gajah");
  // menangkap pilihan komputer
  let comp = Math.random();

  // membangkitkan bilangan random
  if (comp < 0.34) {
    comp = "orang";
  } else if ((comp >= 0.34 && comp < 0, 67)) {
    comp = "gajah";
  } else {
    comp = "semut";
  }

  // menentukan rules
  let hasil = "";
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    // if (comp == "orang") {
    //   hasil = "MENANG";
    // } else {
    //   hasil = "KALAH";
    // }
    // menggunakan ternary operator
    hasil = comp == "orang" ? "MENANG" : "KALAH";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH" : "MENANG";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "memasukkan pilihan yang salah!";
  }
  // menentukan hasil

  // tampilkan hasilnya

  alert(
    "Kamu memilih: " +
      p +
      " dan Komputer memilih: " +
      comp +
      "\nMaka hasilnya adalah Kamu: " +
      hasil
  );
  tanya = confirm("lagi?");
}

alert("terimakasih");

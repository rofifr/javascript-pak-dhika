function jumlahVolumeDuaKubus(kubusSatu, kubusDua) {
  return kubusSatu * kubusSatu * kubusSatu + kubusDua * kubusDua * kubusDua;
}

alert(jumlahVolumeDuaKubus(8, 3));
alert(jumlahVolumeDuaKubus(10, 23));

// atau dengan perulangan
let tanya = 0;

while (tanya < 3) {
  // Deklarasikan sisiA dan sisiB di luar fungsi atau sebagai parameter fungsi
  let sisiA = prompt("Masukkan nilai sisi kubus pertama");
  let sisiB = prompt("Masukkan nilai sisi kubus kedua");

  function penjumlahanKubus(sisiA, sisiB) {
    return sisiA * sisiA * sisiA + sisiB * sisiB * sisiB;
  }

  // Berikan argumen saat memanggil fungsi
  alert("Hasilnya " + penjumlahanKubus(Number(sisiA), Number(sisiB)));

  tanya++;

  // Menggunakan confirm untuk menanyakan apakah ingin menghitung lagi
  if (!confirm("Mau menghitung lagi?")) {
    break; // Keluar dari loop jika jawabannya tidak
  }
}

alert("Terima kasih");

// Kode di atas adalah sekaligus penggunaan Refactoring

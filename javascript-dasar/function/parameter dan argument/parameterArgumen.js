// Hasil saya

function penjumlahanNilaiParameter(parameterPertama, ParameterKedua) {
  return parameterPertama + ParameterKedua;
}

function perkalianNilaiParameter(parameterPertama, ParameterKedua) {
  return parameterPertama * ParameterKedua;
}
let nilaParameterPertamaSatu = parseInt(
  prompt("Masukkan Nilai Parameter pertama untuk penjumlahan pertama:")
);
let nilaParameterKeduaSatu = parseInt(
  prompt("Masukkan Nilai Parameter kedua untuk penjumlahan pertama:")
);

let penjumlahanKesatu = penjumlahanNilaiParameter(
  nilaParameterPertamaSatu,
  nilaParameterKeduaSatu
);
alert(
  "Nilai yang dihasilkan dari penjumlahan pertama adalah: " + penjumlahanKesatu
);

let nilaParameterPertamaDua = parseInt(
  prompt("Masukkan Nilai Parameter pertama untuk penjumlahan kedua:")
);
let nilaParameterKeduaDua = parseInt(
  prompt("Masukkan Nilai Parameter kedua untuk penjumlahan kedua:")
);

let penjumlahanKedua = penjumlahanNilaiParameter(
  nilaParameterPertamaDua,
  nilaParameterKeduaDua
);
alert(
  "Nilai yang dihasilkan dari penjumlahan kedua adalah: " + penjumlahanKedua
);

let jumlahPerkalian = perkalianNilaiParameter(
  penjumlahanKesatu,
  penjumlahanKedua
);

alert(
  "Hasil perkalian dari kedua penjumlahan tersebut yaitu " +
    penjumlahanKesatu +
    " dikalikan dengan " +
    penjumlahanKedua +
    " adalah " +
    jumlahPerkalian
);

// Contoh pak Dika

function pertambahan(nilaiSatu, nilaiDua) {
  return nilaiSatu + nilaiDua;
}

function perkalian(nilaiSatu, nilaiDua) {
  return nilaiSatu * nilaiDua;
}

let hasilnya = perkalian(pertambahan(5, 4), pertambahan(3, 2));
alert("hasil perkalian dari 2 penjumlahan adalah: " + hasilnya);

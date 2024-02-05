// Mengelola angkot dengan menambahkan kompleksitas dari project sebelumnya menggunakan Object

// Menggunakan Constructor
function MengelolaAngkot(sopir, trayek, penumpang, ongkos) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.ongkos = ongkos;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
}

let angkotKeSatu = new MengelolaAngkot("Rofi Fathurrohman", ["Cibeureum", "Pancasila"], [], 0);
let angkotKeDua = new MengelolaAngkot("Riyan Bikes", ["Kawalu", "Term Pancasila"], [], 0);

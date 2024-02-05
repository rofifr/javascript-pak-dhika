// Mengelola angkot dengan menambahkan kompleksitas dari project sebelumnya menggunakan Object

// Menggunakan Constructor
function MengelolaAngkot(sopir, trayek, penumpang, ongkos) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.ongkos = ongkos;
}

let angkotKeSatu = new MengelolaAngkot("Rofi Fathurrohman", ["Cibeureum", "Pancasila"], [], 0);

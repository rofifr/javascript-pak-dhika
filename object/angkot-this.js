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

  this.penumpangTurun = function (namaPenumpang, bayarOngkos) {
    if (this.penumpang.length === 0) {
      alert("Angkot masih belum ada penumpangnya");
      return false;
    }

    for (let noKursi = 0; noKursi < this.penumpang.length; noKursi++) {
      if (this.penumpang[noKursi] == namaPenumpang) {
        this.penumpang[noKursi] = undefined;
        this.ongkos += bayarOngkos;
        return this.penumpang;
      } else if (noKursi === penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada di dalam angkot");
        return penumpang;
      }
    }
  };
}

let angkotKeSatu = new MengelolaAngkot("Rofi Fathurrohman", ["Cibeureum", "Pancasila"], [], 0);
let angkotKeDua = new MengelolaAngkot("Riyan Bikes", ["Kawalu", "Term Pancasila"], [], 0);

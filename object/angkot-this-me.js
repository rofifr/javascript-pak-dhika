function AngkotTasik(supir, trayek, penumpang, ongkos) {
  this.supir = supir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.ongkos = ongkos;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, biayaOngkos) {
    if (this.penumpang.length === 0) {
      console.log("Angkot masih kosong!");
      return false;
    }

    for (let noUrutPenumpang = 0; noUrutPenumpang < this.penumpang.length; noUrutPenumpang++) {
      if (this.penumpang[noUrutPenumpang] == namaPenumpang) {
        this.penumpang[noUrutPenumpang] = undefined;
        this.ongkos += biayaOngkos;
        return this.penumpang;
      } else if (noUrutPenumpang === this.penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada di dalam angkot");
        return this.penumpang;
      }
    }
  };
}

let AngkotHiji = new AngkotTasik("Ujang", ["Urug", "Term Pancasila"], [], 0);
let AngkotDua = new AngkotTasik("Umang", ["Awipari", "Term Pancasila"], [], 0);

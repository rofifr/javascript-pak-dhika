let penumpang = ["Rofi", undefined, "Fathurrohman"];
let tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (let indexPenumpang = 0; indexPenumpang < penumpang.length; indexPenumpang++) {
      if (penumpang[indexPenumpang] == undefined) {
        penumpang[indexPenumpang] = namaPenumpang;
        return penumpang;
      } else if (penumpang[indexPenumpang] == namaPenumpang) {
        console.log(namaPenumpang + " sudah ada di dalam angkot");
        return penumpang;
      } else if (indexPenumpang == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

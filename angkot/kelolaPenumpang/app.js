let penumpang = [];
let tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (let indexPenumpang = 0; indexPenumpang < penumpang.length; indexPenumpang++) {
      if (penumpang[indexPenumpang] == undefined) {
        penumpang[indexPenumpang] = namaPenumpang;
        return penumpang;
      } else if (namaPenumpang == namaPenumpang) {
        console.log("Penumpang sudah ada di dalam angkot");
        return penumpang;
      }
    }
  }
};

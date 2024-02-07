let penumpang = [];
let tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (let indexPenumpang = 0; indexPenumpang < penumpang.length; indexPenumpang++) {
      // jika ada kursi yang kosong
      if (penumpang[indexPenumpang] == undefined) {
        penumpang[indexPenumpang] = namaPenumpang;
        return penumpang;
      } else if (penumpang[indexPenumpang] == namaPenumpang) {
        // jika sudah ada nama yang sama
        console.log(namaPenumpang + " sudah ada di dalam angkot");
        return penumpang;
      } else if (indexPenumpang == penumpang.length - 1) {
        // jika seluruh kursi terisi
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    console.log("Penumpang di dalam angkot sedang kosong");
  } else {
    for (let indexPenumpangKeluar = 0; indexPenumpangKeluar < penumpang.length; indexPenumpangKeluar++) {
      // jika nama penumpang sesuai
      if (penumpang[indexPenumpangKeluar] == namaPenumpang) {
        penumpang[indexPenumpangKeluar] = undefined;
        return penumpang;
      } else if (indexPenumpangKeluar == penumpang.length - 1) {
        // jika tidak ada nama yang sesuai
        console.log(namaPenumpang + " Tidak ada di dalam angkot");
      }
    }
  }
  return penumpang;
};

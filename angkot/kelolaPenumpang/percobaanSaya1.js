let penumpangAngkot = ["Rofi", undefined, "Fathurrohman"];

function tambahPenumpangAngkot(namaPenumpangAngkot, penumpangAngkot) {
  if (penumpangAngkot.length == 0) {
    penumpangAngkot.push(namaPenumpangAngkot);
    return penumpangAngkot;
  } else {
    for (let nomorPenumpangAngkot = 0; nomorPenumpangAngkot < penumpangAngkot.length; nomorPenumpangAngkot++) {
      if (penumpangAngkot[nomorPenumpangAngkot] == undefined) {
        penumpangAngkot[nomorPenumpangAngkot] = namaPenumpangAngkot;
        return penumpangAngkot;
      } else if (penumpangAngkot[nomorPenumpangAngkot] == namaPenumpangAngkot) {
        console.log(namaPenumpangAngkot + " sudah ada di dalam angkot");
        return penumpangAngkot;
      } else if (nomorPenumpangAngkot == penumpangAngkot.length - 1) {
        penumpangAngkot.push(namaPenumpangAngkot);
        return penumpangAngkot;
      }
    }
  }
}

function hapusPenumpangAngkot(namaPenumpangAngkot, penumpangAngkot) {
  if (penumpangAngkot.length == 0) {
    console.log("Angkot belum berisi penumpang");
    return penumpangAngkot;
  } else {
    for (let nomorPenumpangKeluar = 0; nomorPenumpangKeluar < penumpangAngkot.length; nomorPenumpangKeluar++) {}
  }
}

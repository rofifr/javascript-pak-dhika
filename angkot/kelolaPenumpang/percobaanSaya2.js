let pelanggan = [];

// tambah pelanggan
function tambahPelangganToko(namaPelanggan, pelanggan) {
  if (pelanggan.length == 0) {
    pelanggan.push(namaPelanggan);
    return pelanggan;
  } else {
    for (let idPelanggan = 0; idPelanggan < pelanggan.length; idPelanggan++) {
      if (pelanggan[idPelanggan] == undefined) {
        pelanggan[idPelanggan] = namaPelanggan;
        return pelanggan;
      } else if (pelanggan[idPelanggan] == namaPelanggan) {
        console.log(namaPelanggan + " pelanggan tersebut sudah masuk ke toko");
        return pelanggan;
      } else if (idPelanggan == pelanggan.length - 1) {
        pelanggan.push(namaPelanggan);
        return pelanggan;
      }
    }
  }
}

// hapus pelanggan
function hapusPelanggan(namaPelanggan, pelanggan) {
  if (pelanggan.length == 0) {
    console.log("Tidak ada pelanggan di toko");
  } else {
    for (let pelangganKeluar = 0; pelangganKeluar < pelanggan.length; pelangganKeluar++) {
      if (pelanggan[pelangganKeluar] == namaPelanggan) {
        pelanggan[pelangganKeluar] = undefined;
        console.log(namaPelanggan + " berhasil dihapus");
        return pelanggan;
      } else if (pelangganKeluar == pelanggan.length - 1) {
        console.log(namaPelanggan + " tidak ada di dalam toko");
      }
    }
  }

  return pelanggan;
}

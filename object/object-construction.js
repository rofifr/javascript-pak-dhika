// penulisan Object dengan metode Contruction ini hampir sama dengan penulisan dengan menggunakan Object function declaration

function Manusia(nama, umur, hobi, alamat, jamTidur) {
  // parameter yang diberikan juga menggunakan properti yang akan digunakan di dalamnya
  this.nama = nama;
  this.umur = umur;
  this.hobi = hobi;
  this.alamat = alamat;
  this.jamTidur = jamTidur;
}

let dataManusiaPadaUmumnya = new Manusia(
  "Ujang Bieber",
  22,
  "Bukan mancing",
  { jl: "Cikenyed No. 9880", desa: "Cwrk", kecamatan: "Jtws", kota: "Tsm", provinsi: "Nganu" },
  { senin: "Sekitar jam 10.30", selasa: "Sekitar jam 10.30", sabtu: "01.30 - gak tidur", keterangan: "Pokoknya kalo besoknya libur, saya gadang" }
);

// penulisan Object dengan metode Contructor ini hampir sama dengan penulisan dengan menggunakan Object function declaration
// tentunya dengan beberapa perbedaan di dalamnya

function Manusia(nama, umur, hobi, alamat, jamTidur) {
  // parameter yang diberikan juga menggunakan properti yang akan digunakan di dalamnya
  this.nama = nama; // ini perbedaan ke 1
  this.umur = umur; // object constructor menggunakan keyword this
  this.hobi = hobi;
  this.alamat = alamat;
  this.jamTidur = jamTidur;
}

let dataManusiaPadaUmumnya = new Manusia( // perbedaan ke 2 adalah, object contructor ini menggunakan keyword new
  "Ujang Bieber",
  22,
  "Bukan mancing",
  { jl: "Cikenyed No. 9880", desa: "Cwrk", kecamatan: "Jtws", kota: "Tsm", provinsi: "Nganu" },
  { senin: "Sekitar jam 10.30", selasa: "Sekitar jam 10.30", sabtu: "01.30 - gak tidur", keterangan: "Pokoknya kalo besoknya libur, saya gadang" }
);

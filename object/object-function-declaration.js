// ini adalah penulisan Object dengan menggunakan function, yaitu Object dengan metode function declaration
function iniObjectFunctionDeclaration(nama, umur, hobi, alamat) {
  // parameternya diisi dengan properti yang akan digunakan di dalam Objectnya

  let manusiaNormal = {};
  manusiaNormal.nama = nama;
  manusiaNormal.umur = umur;
  manusiaNormal.hobi = hobi;
  manusiaNormal.alamat = alamat;
  return manusiaNormal;
}

let dataManusiaNormal = iniObjectFunctionDeclaration("Rofi Fathurrohman", 22, "Tidur", {
  Jalan: "xnxx 6969",
  desa: "Cwrk",
  Kec: "Hello World",
  kota: "Tasikmalaya",
  provinsi: "Jawa Barat",
});

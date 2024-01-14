// let angka = prompt("Masukkan angka: ");

// if (angka == 1) {
//   alert("Anda memasukkan angka 1");
// } else if (angka == 2) {
//   alert("Anda memasukkan angka 2");
// } else if (angka == 3) {
//   alert("Anda memasukkan angka 3");
// } else {
//   alert("Anda memasukkan angka yang salah");
// }
// konversi dari if else if ke switch

// switch (angka) {
//   case "1":
//     alert("Anda memasukkan angka 1");
//     break;
//   case "2":
//     alert("Anda memasukkan angka 2");
//     break;
//   case "3":
//     alert("Anda memasukkan angkat 3");
//     break;
//   default:
//     alert("Angka yang anda masukkan salah");
// }

// contoh lain
let kendaraan = prompt(
  "Masukkan tipe kendaraan. Cth Avanza, Fortuner, Kijang Innova, Rush. atau Supra, Vario, Beat, N-Max, PCX"
);

switch (kendaraan) {
  case "Avanza":
  case "Fortuner":
  case "Kijang Innova":
  case "Rush":
    alert("Anda memiliki tipe kendaraan mobil");
    break;

  case "Supra":
  case "Vario":
  case "Beat":
  case "N-Max":
  case "PCX":
    alert("Anda memiliki tipe kendaraan motor");
    break;
  default:
    alert("Tipe kendaraan yang anda masukkan salah");
}

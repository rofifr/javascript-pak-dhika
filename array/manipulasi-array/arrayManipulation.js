// Manipulasi Array
// * index dimulai dari angka 0

// 1. Menambah isi Array
let namaVariable = [];
namaVariable = ["Fikran", "Rofi", "Fathurrohman", 69, true];

console.log(namaVariable);
//  atau
// ini tidak direkomendasikan

let tidakRekomendasi = [];
tidakRekomendasi[0] = "Fikran";
tidakRekomendasi[1] = "Rofi";
tidakRekomendasi[2] = "Fathurrohman";
tidakRekomendasi[7] = 69;
tidakRekomendasi[9] = true;

console.log(tidakRekomendasi);
// array yang indexnya terlewat tetap akan dihitung, namun dengan nilai yang kosong (empty) atau undefined

// 2. Menghapus Array

let deleteArray = ["Rofi", "Fathurrohman", "Fikran", 69, true];

deleteArray[1] = undefined;
console.log(deleteArray);

// nilai dari variable deleteArray dengan index ke 1 akan menjadi nilai kosong atau undefined

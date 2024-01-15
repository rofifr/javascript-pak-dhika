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

let deleteArray = ["Rofi", "Fathurrohman", "Fikran", 69, true, [("Muhammad", "Bryan", "Zalnando")]];

deleteArray[1] = undefined;
deleteArray[3] = undefined;
deleteArray[5][2] = undefined;
console.log(deleteArray);

// nilai dari variable deleteArray dengan index ke 1 akan menjadi nilai kosong atau undefined

// 3. Menampilkan isi Array

let showArray = ["Rofi", "Fathurrohman", "Fikran", 69, true, [("Muhammad", "Bryan", "Zalnando")]];

// menampilkan Array menggunakan looping
for (let i = 0; i < showArray.length; i++) {
  console.log("ini adalah index ke- " + i + " dengan nilai " + showArray[i]);
}

// dengan mennggunakan looping for ini maka akan menampilkan seluruh data terurut sesuai indexnya, dan nilai atau elemen yang multidimensi yaitu [("Muhammad", "Bryan", "Zalnando")], itu tidak akan tertampil.

// Hal ini terjadi karena array multidimensi memiliki struktur yang berbeda dengan array biasa.

// Oleh karena itu, ketika menggunakan looping for untuk menampilkan isi array, indeks i hanya akan berjalan hingga elemen terakhir array showArray, yaitu elemen ke-5. Elemen ke-6, yaitu array [("Muhammad", "Bryan", "Zalnando")], tidak akan terakses oleh looping for.

// Untuk menampilkan isi array multidimensi, dapat menggunakan beberapa cara, yaitu:

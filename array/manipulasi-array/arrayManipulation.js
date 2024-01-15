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

let deleteArray = ["Rofi", "Fathurrohman", "Fikran", 69, true, ["Muhammad", "Bryan", "Zalnando"]];

deleteArray[1] = undefined;
deleteArray[3] = undefined;
deleteArray[5][2] = undefined;
console.log(deleteArray);

// nilai dari variable deleteArray dengan index ke 1 akan menjadi nilai kosong atau undefined

// 3. Menampilkan isi Array

let showArray = ["Rofi", "Fathurrohman", "Fikran", 69, true, ["Muhammad", " Bryan", " Zalnando"]];

// menampilkan Array menggunakan looping
for (let i = 0; i < showArray.length; i++) {
  console.log("ini adalah index ke- " + i + " dengan nilai " + showArray[i]);
}

// Metode pada Array

// join()
let metodeJoin = ["Rofi", "Fathurrohman", "Fikran", 69, true, ["Muhammad", " Bryan", " Zalnando"]];
console.log(metodeJoin.join(" - "));

// push() dan pop()
// push() -> akan menambahkan element lain pada bagian akhir dari element atau nilai dari variabel arraynya

let usePush = [];
usePush = ["Rofi", "Fathurrohman", "Fikran", 69, true, ["Muhammad", " Bryan", " Zalnando"]];

usePush.push("Amstrong", "Ujang");
console.log(usePush);

// pop()
// pop() -> akan menghapus element lain pada bagian akhir dari element atau nilai dari variabel arraynya

let usePop = [];
usePop = ["Rofi", "Fathurrohman", "Fikran", 69, true, ["Muhammad", " Bryan", " Zalnando"]];

usePop.pop();
console.log(usePop); //maka element atau nilai dengan  multidimensi yang ada di dalam variabel array akan terhapus, karena merupakan element terakhir

// unshift() dan shift()
// unshift() -> akan menambahkan element lain pada bagian awal dari element atau nilai dari variabel arraynya

let useUnshift = [];
useUnshift = ["Rofi", "Fathurrohman", "Fikran", 69, true, ["Muhammad", " Bryan", " Zalnando"]];

useUnshift.unshift("Ujang", "Bieber");
console.log(useUnshift);

// shift()
// shift() -> akan menghapus element yang ada pada bagian awal dari element atau nilai dari variable arraynya
let useShift = ["Rofi", "Fathurrohman", "Fikran", 69, true, ["Muhammad", " Bryan", " Zalnando"]];

useShift.shift();
useShift.shift();
console.log(useShift);

// untuk push() dan unshift() itu bisa menambahkan beberapa element sekaligus
// tapi untuk pop() dan shift() hanya bisa dilakukan satu-persatu

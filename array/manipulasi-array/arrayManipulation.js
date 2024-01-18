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
// 1. push() -> akan menambahkan element lain pada bagian akhir dari element atau nilai dari variabel arraynya

let usePush = [];
usePush = ["Rofi", "Fathurrohman", "Fikran", 69, true, ["Muhammad", " Bryan", " Zalnando"]];

usePush.push("Amstrong", "Ujang");
console.log(usePush);

// pop()
// 2. pop() -> akan menghapus element lain pada bagian akhir dari element atau nilai dari variabel arraynya

let usePop = [];
usePop = ["Rofi", "Fathurrohman", "Fikran", 69, true, ["Muhammad", " Bryan", " Zalnando"]];

usePop.pop();
console.log(usePop); //maka element atau nilai dengan  multidimensi yang ada di dalam variabel array akan terhapus, karena merupakan element terakhir

// unshift() dan shift()
// 3. unshift() -> akan menambahkan element lain pada bagian awal dari element atau nilai dari variabel arraynya

let useUnshift = [];
useUnshift = ["Rofi", "Fathurrohman", "Fikran", 69, true, ["Muhammad", " Bryan", " Zalnando"]];

useUnshift.unshift("Ujang", "Bieber");
console.log(useUnshift);

// shift()
// 4. shift() -> akan menghapus element yang ada pada bagian awal dari element atau nilai dari variable arraynya
let useShift = ["Rofi", "Fathurrohman", "Fikran", 69, true, ["Muhammad", " Bryan", " Zalnando"]];

useShift.shift();
useShift.shift();
console.log(useShift);

// untuk push() dan unshift() itu bisa menambahkan beberapa element sekaligus
// tapi untuk pop() dan shift() hanya bisa dilakukan satu-persatu

// lalu bagaimana jika ingin menghapus atau menambahkan selain di awal atau di akhir?
// kata pak Dhika, itu akan dibahas di video selanjutnya

// slice() dan splice()
// 5. splice() -> nah ini, adalah metode yang bisa menghapus dan menambahkan element baru di tengah-tengah
// slice(indexAwal, mauDihapusBerapa, elementBaru1, elementBaru2, ...)
let useSplice = ["Rofi", "Indriyani", "Fathurrohman"];
useSplice.splice(2, 0, "Amstrong");
// maksudnya adalah, 2 sebagai tempat kita mengurutkan index mana yang mau diambil, dan 0 sebagai 'bahwa tidak ada data yang perlu dihapus' (gunakan 1 atau lebih selain 0 untuk menghapus data yang diinginkan)
console.log(useSplice.join(" - "));

// 6. slice() -> mengiris element atau memisahkan element
// slice(indexAwal, indexAkhir)
let useSlice = [];
useSlice = ["Rofi", "Indriyani", "Fathurrohman", "Amstrong", 69];
let useSliceToSlice = useSlice.slice(1, 4);
// slice() itu menghasilkan variable baru, jadi harus disimpan di dalam variable baru
console.log(useSliceToSlice.join(" - ")); // ini element dengan variable baru menggunakan slice()
console.log(useSlice.join(" - ")); // ini element dengan variabel lama tanpa menggunakan slide()

// forEach() dan map()
// 7. forEach() -> ini adalah metode yang menampilkan nilai atau element array menggunakan perulangan, (ini hampir sama dengan penggunaan for())
let useForEach = ["Ujang", "Rofi", "Indriyani", "Fathurrohman"];
useForEach.forEach(function (e, i) {
  // e -> sebagai element dan i -> sebagai index
  console.log("Programmer ke - " + (i + 1) + " bernama " + e);
});

// 8. map() -> sama seperti forEach tapi lebih baik, karena map() ini bisa mengembalikan array sedangkan forEach() tidak

let useMap = [19, 16, 9, 7, 22, 27, 41];
let useMapForMap = useMap.map(function (e) {
  //jika menggunakan forEach() maka hasilnya tidak dapat dikalikan
  // * map() mengembalikan array
  return e * 5;
});
console.log(useMapForMap.join(" - "));

// 9. sort() -> metode ini menampilkan secara berurutan dari element yang ada di dalam array
let useSort = [];
useSort = [23, 25, 12, 18, 7, 1, 34, 77, 101];
useSort.sort();
console.log(useSort); // ini akan menampilkan urutan yang hanya mengambil angka pertamanya

// untuk mengatasinya kita bisa menggunakan function()
let useSecondSort = [23, 25, 12, 18, 7, 1, 34, 77, 101];
useSecondSort.sort(function (a, b) {
  return a - b;
});
console.log(useSecondSort.join(" - "));

let cobaUseSortLagi = ["Indriyani", "Ujang", "Fathurrohman", "Amstrong", "Barbeque", "Chuaks", "Decimal", "Repeat"];
cobaUseSortLagi.sort();
console.log(cobaUseSortLagi.join(", ")); // ternyata ini juga bisa untuk mengurutkan huruf

// filter() dan find() -> (sama-sama berfungsi untuk menemukan element pada array, namun juga terdapat perbedaan)
// 10. filter() -> ini bisa menemukan element pada array lebih dari satu (banyak)
let useFilter = [22, 101, 622, 11, 3, 723, 554, 213];
let searchFilter = useFilter.filter(function (hehe) {
  // filter() akan mengembalikan nilai dalam bentuk array
  return hehe == 213; //ini akan mengembalikan nilai atau element array dimana nilai sama dengan 213
  // ini juga bisa mengembalikan nilai dengan operator aritmatika lainnya
  // misal
  // return hehe < 22
});
console.log(searchFilter);

// find() -> ini hanya dapat menemukan satu nilai atau element pada array
let useFind = [];
useFind = [22, 101, 622, 11, 3, 723, 554, 213, 612, 96, 69];
let seacrhFind = useFind.find(function (haha) {
  return haha == 554; // karena ini hanya dapat mengembalikan satu nilai, jadi mungkin tidak bisa menggunakan operator aritmatika lainnya
});
console.log(seacrhFind);

// selesai

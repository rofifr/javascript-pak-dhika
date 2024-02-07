// DOM Selection
// penulisan code untuk menyeleksi

// Pertama, document.getElementById()
// document harus dituliskan terlebih dahulu, karena itu adalah root node dari apa yang akan kita seleksi
const judul = document.getElementById("title"); // getElementById() -> mengembalikan element
// percobaan manipulasi
judul.style.color = "white";
judul.style.backgroundColor = "#2879ff";

// Kedua, document.getElementsByTagName()
const paragraf = document.getElementsByTagName("p"); // getElementsByTagName() -> mengembalikan HTMLCollections
// ini akan menjadi sebuah array, jadi tidak bisa langsung memanipulasi seperti sebelumnya
// untuk menjadikan tag tersebut bisa diubah menggunakan DOM ini, maka harus dituliskan imdexnya terlebih dahulu
// paragraf[0].style.backgroundColor = "#bfd6ff";
// paragraf[1].style.backgroundColor = "#bfd6ff";
// paragraf[2].style.backgroundColor = "#bfd6ff";
// namun, mungkin ini bukan cara yang disarankan

// berikut cara yang mungkin lebih baik, yaitu menggunakan looping
for (let colorNum = 0; colorNum < paragraf.length; colorNum++) {
  paragraf[colorNum].style.backgroundColor = "#bfd6ff";
  // ini akan menjadi cara yang lebih baik
}

// meskipun element yang diseleksi cuma ada satu, jika menggunakan getElementsByTagName() maka tetap akan menjadi HTMLCollections. artinya ini akan menjadi sebuah array juga. misal,
const h1 = document.getElementsByTagName("h1")[0]; // jadi, karena ini array, maka indexnya harus tetap disertakan. index ini bisa disimpan di akhir seperti ini, atau dibuat ketika manipulasi akan dilakukan seperti sebelumnya
h1.innerHTML = "Belajar DOM - Rofi";

// ketiga, document.getElementsByClassName()
const p1 = document.getElementsByClassName("p1");

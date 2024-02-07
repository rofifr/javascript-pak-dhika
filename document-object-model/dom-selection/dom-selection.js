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

// Ketiga, document.getElementsByClassName()
const p1 = document.getElementsByClassName("p1"); // getElementsByClassName() -> juga mengembalikan HTMLCollections
// dikarenakan getElementsByClassName() ini juga mengembalikan HTMLCollections dan menjadi sebuah array, maka cara untuk membuat perubahannya juga harus menyertakan indexnya, misal
p1[0].innerHTML = "Ini adalah paragraf yang diubah menggunakan DOM Javascript"; // jadi penempatan penulisan indexnya bisa seperti ini (p1.[0]) atau diatas ketika pemanggilan atau ketika seleksi (const p1 = document.getElementsByClassName("p1")[0];)

// Keempat, document.querySellector()
const spanForSpan = document.querySelector("p.span1 span:nth-child(2)"); // querySelector() -> mengembalikan element
spanForSpan.style.backgroundColor = "#2879ff";
spanForSpan.style.color = "white";

// untuk querySelector() ini, hampir sama seperti selector pada CSS, namun perbedaannya ini akan menyeleksi elemen pertama yang dia temui
// jika terdapat 4 span yang ada di dalam HTML, maka elemen span yang pertama yang akan diseleksi, contohnya di bawah ini
const spanForSelect = document.querySelector("p.span1 span");
spanForSelect.style.color = "orange"; // maka hanya akan mengubah warna element span yang pertama dia temukan

// dengan itu, jika ingin semua span terseleksi maka harus menggunakan metode selector selanjutnya, yaitu
// Kelima, document.querySelectorAll()
const spanInSection = document.querySelectorAll("#section3 div span"); // querySelectorAll -> mengembalikan NodeList
// namun, querySelectorAll() juga akan menjadi array, jadi ketika melakukan manipulasi atau perubahan harus menggunakan index, yang penempatan penulisan indexnya bisa seperti ini (spanInSection[0]) atau diatas ketika pemanggilan atau ketika seleksi (const spanInSection = document.querySelectorAll("#section3 div span")[0];)

// spanInSection[0].style.backgroundColor = "yellow";

// dan untuk bisa mengubah semuanya, kita bisa melakukannya seperti di awal, yaitu menggunakan looping
for (let spanNum = 0; spanNum < spanInSection.length; spanNum++) {
  spanInSection[spanNum].style.backgroundColor = "yellow";
}

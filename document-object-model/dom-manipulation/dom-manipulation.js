// DOM Manipulation

// beberapa metode untuk mengubah, menambah dan menghapus element ataupun isi element menggunakan DOM (Document Object Model) pada JavaScript
// Ada 2 Sesi
// 1. Manipulasi Element
// 2. Manipulasi Node

// Beberapa metode yang digunakan
/* 

• element.innerHTML
• element.style.<property>
• element.setAttribute( )
• element.classList
• ... (masih banyak lagi)
*/

// innerHTML
const judul = document.getElementById("title");
// menggunakan innerHTML ini, dapat mengubah apapun isi di dalam element yang diseleksi
judul.innerHTML = "Rofi <span style='color: blue'>Fathurrohman</span>";
// atau
const firstSection = document.querySelector("#section1 .p2");
firstSection.innerHTML = "Ini adalah sebuah paragraf yang berisi <a href='#' style='background-color: #dedede'>link</a> di dalamnya";

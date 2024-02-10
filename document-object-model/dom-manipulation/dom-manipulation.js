// DOM Manipulation

// beberapa metode untuk mengubah, menambah dan menghapus element ataupun isi element menggunakan DOM (Document Object Model) pada JavaScript
// Ada 2 Sesi
// 1. Manipulasi Element
// 2. Manipulasi Node

// Beberapa metode yang digunakan
/* 

• element.innerHTML
• element.style.<propertyCSS>
• element.setAttribute()
• element.classList
• ... (masih banyak lagi)
*/

// element.innerHTML
const judul = document.getElementById("title1");
// menggunakan innerHTML ini, dapat mengubah apapun isi di dalam element yang diseleksi
judul.innerHTML = "Rofi <span style='color: blue'>Fathurrohman</span>";
// contoh lain
const firstSection = document.querySelector("#section1 .p2");
firstSection.innerHTML = "Ini adalah sebuah paragraf yang berisi <a href='#' style='background-color: #dedede'>link</a> di dalamnya";

// element.style.<propertyCSS>
const judulKedua = document.getElementsByTagName("h3")[0]; // getElementsByTagName() ini mengembalikan HTMLCollections maka harus menggunakan index
judulKedua.style.backgroundColor = "yellow";
judulKedua.style.color = "darkgoldenrod";
judulKedua.innerHTML = "Text ini ditambahkan menggunakan DOM Javascript";

// contoh lain
const paragrafSection = document.querySelector("#section2 p");
paragrafSection.style.fontWeight = "bold";
paragrafSection.style.backgroundColor = "#bfd6ff";

// element.setAttribute()
const judulKetiga = document.getElementById("title3");
judulKetiga.innerHTML = "Ini judul ke tiga";
judulKetiga.setAttribute("name", "rofi");

const spanToSet = document.querySelector("#section3 .span1 span");
spanToSet.setAttribute("id", "firstSpan");
console.log(spanToSet.getAttribute("id")); // getAttribute() -> untuk mengetahui isi di dalam atribut yang ada di dalam element

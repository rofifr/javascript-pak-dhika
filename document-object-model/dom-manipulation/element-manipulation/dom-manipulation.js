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
judulKetiga.setAttribute("name", "rofi"); // setAttribute() -> untuk menambah atribut baru pada suatu element, jika atribut yang kita set itu sebelumnya sudah ada di dalam element, maka atribut yang kita set disini akan menimpa atribut yang sebelumnya

const spanToSet = document.querySelector("#section3 .span1 span");
spanToSet.setAttribute("id", "firstSpan");
console.log(spanToSet.getAttribute("id")); // getAttribute() -> untuk mengetahui isi di dalam atribut yang ada di dalam element

const secondSpan = document.getElementById("secondSpan");
secondSpan.removeAttribute("id"); // removeAttribute() -> untuk menghilangkan atribut yang sebelumnya sudah ada di dalam element

// elemet.classList()
const thirdSpan = document.querySelector(".thirdSpanInDiv");
thirdSpan.classList.add("third-list"); // classList.add() -> menambahkan class baru ke dalam atribut class pada element tanpa menimpanya

const secondSpanInDiv = document.getElementsByClassName("secondSpanInDiv")[0];
secondSpanInDiv.classList.remove("second-span"); // classList.remove() -> menghapus class tertentu yang sudah di dalam suatu element, jika tidak ada, maka tidak menjadi masalah

const firstSpanInDiv = document.querySelector(".firstSpanInDiv");
firstSpanInDiv.classList.toggle("first-span"); // classList.toggle() -> dapat menambahkan class ke dalam element tanpa menimpa class sebelumnya jika belum ada dan menghapus class dari element jika sudah ada sebelumnya
const allBody = document.body;
allBody.classList.toggle("body-background");

const fourthSpanInDiv = document.querySelector(".fourthSpanInDiv");
console.log(fourthSpanInDiv.classList.item(2)); // classList.item() -> menampilkan urutan class di dalam sebuah element sesuai dengan urutannya, dengan contoh ini --> classList.item(2), maka akan menampilkan urutan kelas ke 2 dari element yang hitungannya dimulai dari 0

console.log(fourthSpanInDiv.classList.contains("tiga")); // classList.contains() -> dapat menanyakan apakah di dalam suatu element terdapat nama class tertentu, jika ya maka akan mengembalikan nilai boolean true, jika tidak ada maka false

console.log(fourthSpanInDiv.classList.replace("satu", "empat")); // classList.replace() -> akan menggantikan class yang sebelumnya sudah ada. artinya menimpa nama class yang ditentukan menjadi nama class yang ditentukan juga

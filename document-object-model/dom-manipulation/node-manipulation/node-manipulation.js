// DOM Manipulation
// Node Manipulation

// createElement() -> membuat element baru
const newParagraph = document.createElement("p");
// createTextNode() -> membuat teks baru
const newText = document.createTextNode("Ini adalah paragraf baru di dalam section pertama");
// appendChild -> memasukan teks atau tag lain yang baru ke dalam element baru
newParagraph.appendChild(newText);

const firstSection = document.getElementById("section1");
firstSection.appendChild(newParagraph);

const newList = document.createElement("li");
const newListText = document.createTextNode("List baru di dalam section kedua");
newList.appendChild(newListText);

const ul = document.querySelector("#section2 ul");
const list = ul.querySelector("li:nth-child(2)");
// insertBefore() -> memasukkan element sebelum element
ul.insertBefore(newList, list);

// removeChild() -> menghapus element
const thirdSection = document.querySelector("#section3");
const sectionLink = thirdSection.getElementsByTagName("a")[0];
thirdSection.removeChild(sectionLink);

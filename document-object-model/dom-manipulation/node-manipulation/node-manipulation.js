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

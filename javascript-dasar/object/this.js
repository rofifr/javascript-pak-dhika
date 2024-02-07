// this

// evaluasi cara penulisan, penggunaan, pembuatan Object

// Cara ke-1 -> function declaration
function exampleDeclaration() {
  console.log(this); // this yang digunakan dalam function declaration -> mengembalikan Object Global
  console.log("Hallo and Hai -> Declaration");
}
exampleDeclaration();

// Cara ke-2 -> Object literal
let exampleLiteral = {};
exampleLiteral.menyapa = function () {
  console.log(this); // this yang digunakan dalam Object literal -> mengembalikan Object yang bersangkutan
  console.log("Hallo and Hai -> Literal");
};
exampleLiteral.menyapa();

// Cara ke-3 -> constructor function
function Constructor() {
  console.log(this); // this yang digunakan dalam constuctor function -> mengembalikan Object yang baru dibuat
  console.log("Hallo and Hai -> Constructor");
}
new Constructor(); // ini adalah Object yang baru dibuat
// istilah keyword new adalah instan

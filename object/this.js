// evaluasi cara penulisan, penggunaan, pembuatan Object

// Cara ke-1 -> function declaration
function exampleDeclaration() {
  console.log("Hallo and Hai -> Declaration");
}
exampleDeclaration();

// Cara ke-2 -> Object literal
let exampleLiteral = {};
exampleLiteral.menyapa = function () {
  console.log("Hallo and Hai -> Literal");
};
exampleLiteral.menyapa();

// Cara ke-3 -> constructor function
function Constructor() {
  console.log("Hallo and Hai -> Constructor");
}
new Constructor();

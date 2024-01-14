function ujangBieber() {
  let diHasilkan = 0;
  for (let i = 0; i < arguments.length; i++) {
    diHasilkan += arguments[i];
  }
  return diHasilkan;
}

let maka = ujangBieber(3, 6, 8, 10, " Laki-laki ", +" 112", " perempuan");
console.log(maka);

// function contohArguments() {
//   return arguments;
// }
// let iniNilaiArguments = contohArguments(2, 4, 6, "ofiamstrong", false);
// console.log(iniNilaiArguments);

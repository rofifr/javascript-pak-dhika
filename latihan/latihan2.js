let s = "";
for (let i = 17; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}

console.log(s);

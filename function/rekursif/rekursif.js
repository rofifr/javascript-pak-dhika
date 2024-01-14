function menampilkanAngka(n) {
  if (n === 0) return;
  console.log(n);
  menampilkanAngka(n - 1);
}

menampilkanAngka(10);

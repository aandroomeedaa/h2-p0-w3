function hitungJumlahKata(kalimat) {
  var hitung=kalimat.split(' ');
  var jumlah=hitung.length;
  return jumlah;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake'))
console.log(hitungJumlahKata('A song to sing')); 
console.log(hitungJumlahKata('I')); 
console.log(hitungJumlahKata('I believe I can code'))

function pasanganTerbesar(num) {
  var numtoString= num.toString();
  var splitNum=[];
  for (var i = 0; i < numtoString.length-1; i++) {
    splitNum.push(Number(numtoString[i]+numtoString[i+1]));
  }
 var min=splitNum[0];
 var max;
 for (var j = 0; j < splitNum.length; j++) {
  if (min<splitNum[j]){
    max=splitNum[j];
    min=splitNum[j];
  }else {
    max=min;
  }
 }
 return max;
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

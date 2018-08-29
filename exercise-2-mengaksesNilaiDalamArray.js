function balikKata(st){
var tampung = ''
for (var i= st.length-1 ; i>=0 ; i--)
{
  tampung = tampung + st[i] 
} 
return (tampung)
}
//TESTCASE
console.log(balikKata('apakabar'))
console.log(balikKata('ISI APA AJA DAH BEBAS TERSERAH LU'))
console.log(balikKata('INVOKER GOT TRIPLE KILL'))
console.log(balikKata('hello world'))
console.log(balikKata('VOID GOT SEVEN DIVINE RAPIER'))

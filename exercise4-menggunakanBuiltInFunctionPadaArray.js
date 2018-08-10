var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling(){
input.splice(1  , 2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung' )
input.splice(4,2 , 'Pria' ,'Membaca')
}
dataHandling(input)
console.log(input) //tuntutan output pertama

console.log('')//disini saya buat console.log supaya rapih
var i= input[3].split('/' , 3)

console.log(i+' (bukan tuntutan output hanya perbandingan)')//hanya perbandingan
console.log('')//disini saya buat console.log supaya rapih

i.sort(function(a, b){return b-a})//tuntutan output kedua
console.log(i)
console.log('')//disini saya buat console.log supaya rapih

i=i.join('-')//tuntutan output ketiga
console.log(i)
console.log('')//disini saya buat console.log supaya rapih

input[1]=input[1].slice(0,15)
console.log(input[1])//tuntutan output ke empat
console.log('')//disini saya buat console.log supaya rapih


//swicth case dibawah dapat berjalan kalau ditaroh pas dibawah input[3].split


{
switch(i[1])
{
  case '01': {
    i[1] ='January'
    break}
  case '02':{
    i[1] = 'February'
    break}
  case '03':{
    i[1] = 'Maret'
    break}
  case '04':{
    i[1] = 'April'
    break}
  case '05':{
    i[1] = 'Mei'
    break}
  case '06':{
    i[1] = 'Juni'
    break}
  case '07':{
    i[1] = 'Juli'
    break}
   case '08':{
    i[1] = 'Agustus'
    break}
   case '09':{
    i[1] = 'September'
    break}
   case '10':{
    i[1] = 'Oktober'
    break}
   case '11':{
    i[1] = 'Noveber'
    break}
   case '12':{
    i[1] = 'Desember'
    break}
  default :
  {
  i[1]='Bulan Tidak Valid + //swicth case ini dapat berjalan kalau ditaroh pas dibawah input[3].split '
  break}
}

}

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

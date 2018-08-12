function tentukanDeretGeometri(arr) {
  var num = arr.slice(-1).pop() / arr.slice(-2, -1).pop()
  var val = true
  
  for (var i = 0; i <= arr.length-2; i++) {
    if (num * arr[i] !== arr[i+1]) {
      val = false
    }
  }
  
  return val

}
// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])) // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])) // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])) // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])) // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])) // false

function targetTerdekat(arr) {
  var a = 0
  var b = 0
  var c = 0
  var arC = []
  
  if(arr.indexOf('x') === - 1) {
    return 0
  }
  else {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === 'x') {
        a = i
        arC.push(a)
      }
      else if(arr[i] === 'o') {
        b = i
      }
      var output = []
      for(var j = 0; j < arC.length; j++) {
        c = Math.abs(b - arC[j])
        output.push(c)
        output.sort()
      }
    }
    return output[0]
  }
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2

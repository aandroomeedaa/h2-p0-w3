function groupAnimals(animals) {
  animals.sort();
  var aR = [];
  var fA = animals[0][0];
  var aT = [];
  
  for (var i = 0; i < animals.length; i++) {
    if (animals[i][0] === fA) {
      aT.push(animals[i]);
    } else {
      aR.push(aT);
      aT = [];
      fA = animals[i][0];
      aT.push(animals[i]);
    }
    if (i === animals.length-1) {
      aR.push(aT);
    }
  }
  return aR;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
console.log('') //consolelog dibuat agar rapi
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

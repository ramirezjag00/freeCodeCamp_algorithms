function diffArray(arr1, arr2) {

  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        delete arr1[i];
        delete arr2[j];
      }
    }
  }
  var arr3 = arr1.concat(arr2).filter(Boolean).sort();
  return arr3;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); //[4]

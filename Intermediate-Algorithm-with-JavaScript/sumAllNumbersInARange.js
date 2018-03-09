function sumAll(arr) {
  var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
  });
  //using spread operator is a shorter way
  //var max = Math.max(...arr);
  //var min = Math.min(...arr);
  var min = arr.reduce(function(a, b) {
    return Math.min(a, b);
  });
  
  var sum = 0;
  for (min; min <= max; min++) {
    sum += min;
  }
  return sum;
}

console.log(sumAll([1, 4])); //10

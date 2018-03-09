function sumEvenArray() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 == 0) {
      sum += arguments[i];
    }
  }
  return sum;
}
console.log(sumEvenArray(2, 1, 3, 5, 34, 67));

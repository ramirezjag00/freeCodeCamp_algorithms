function power(x, y) {
  var a = x;
  var b = y;
  while (x % y == 0) {
    x /= y;
  }
  if (x == 1) {
    return a + " is a power of " + b;
  } else {
    return a + " is not a power of " + b;
  }
}
console.log(power(9, 3));
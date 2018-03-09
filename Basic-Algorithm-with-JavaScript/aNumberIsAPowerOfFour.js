function powerOfFour(num) {
  var x = num;
  while (x % 4 == 0) {
    x /= 4;
  }
  if (x == 1) {
    return num + " is a power of 4";
  } else {
    return num + " is not a power of 4";
  }
}
console.log(powerOfFour(16));
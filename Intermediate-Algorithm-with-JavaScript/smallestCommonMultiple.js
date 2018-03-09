function smallestCommons(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var multiple = max;

  for (var i = max; i >= min; i--) {
    if (multiple % i != 0) {
      multiple += max;
      i = max;
    }
  }
  return multiple;
}

console.log(smallestCommons([3, 6]));
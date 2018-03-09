function steamrollArray(arr) {
  return arr.reduce(function(a, b) {
    if (Array.isArray(b)) {
      return a.concat(steamrollArray(b));
    }
    return a.concat(b);
  }, []);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
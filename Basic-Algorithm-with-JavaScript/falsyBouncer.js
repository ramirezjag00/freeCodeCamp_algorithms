function bouncer(arr) {
  return arr.filter(function(truth) {
    if (truth) {
      return truth;
    }
  });
}

console.log(bouncer([7, "ate", "", false, 9]));

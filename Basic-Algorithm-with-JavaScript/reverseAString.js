function reverseString(str) {
  var array = str.split("").reverse();
  str = array.join("");
  return str;
}

console.log(reverseString("Greetings from Earth"));

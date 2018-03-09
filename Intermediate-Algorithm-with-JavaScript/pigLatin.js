function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(str.charAt(0))) {
    str += "way";
  } else {
    var n = str.search(/[aeiou]/);
    var cons = str.substr(0, n);
    str = str.substr(n, str.length) + cons + "ay";
  }

  return str;
}

console.log(translatePigLatin("consonant"));

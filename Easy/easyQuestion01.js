function charCount(letter, str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
}

console.log(charCount("o", "orangeOrange"));

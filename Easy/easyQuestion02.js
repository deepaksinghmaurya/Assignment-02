function addUp(number) {
  var count = 0;
  for (var i = 1; i <= number; i++) {
    count += i;
  }

  return count;
}
console.log(addUp(600));

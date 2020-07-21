var string = { a: 1, e: 2, i: 3, o: 4, u: 5 };
var s = "chembur";
s = s.replace(/[aeiou]/g, (m) => string[m]);
console.log(s);

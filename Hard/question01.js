function realType(obj) {
    return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
}
console.log(realType(5));
console.log(realType("a"));
console.log(realType(true));
console.log(realType([]));
console.log(realType(null));

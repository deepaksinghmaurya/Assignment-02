function strings(e1, e2, e3, e4) {
    var x = [e1, e2, e3, e4];
    for (let i = 1; i < x.length; i++) {
        if (x[0] !== x[i])
            return false;
    }
    return true;
}
var output = strings("@", "@", "@", "@");
console.log(output);

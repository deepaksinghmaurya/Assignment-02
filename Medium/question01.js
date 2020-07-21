function reverse(string, substring) {

    var x = string.split(/(\s+)/);

    return x.map(y => {
        if (y.startsWith(substring)) {

            y = y.split("").reverse().join("");
        }

        return y;
    }).join("");


}

console.log(reverse("word searches are super fun", "s"))


function removeDups(array) {
    var arr = [];
    for (i = 0; i < array.length; i++) {
        if (arr.indexOf(array[i]) === -1) {
            arr.push(array[i]);
        }
    }
    return arr;
}

var names = ["1", "0", "1"];
var arr = removeDups(names);
console.log(arr)
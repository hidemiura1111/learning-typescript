function add(a, b) {
    if (b === undefined) {
        b = 0;
    }
    return a + b;
}
console.log(add(10, 5));
console.log(add(10));
var add2 = function (a, b) { return a + b; };
console.log(add2(11, 22));
function add3(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + ' ' + b;
    }
    return a + b;
}
console.log(add3(10, 20));
console.log(add3('hello', 'world'));
// console.log(add3('hello', 20)); // Error, The call would have succeeded against this implementation, but implementation signatures of overloads are not externally visible.

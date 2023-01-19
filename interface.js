// Interface
function getTotal(result) {
    return result.a + result.b;
}
var result = {
    a: 10,
    b: 20,
    c: 'Hello'
};
console.log(getTotal(result));

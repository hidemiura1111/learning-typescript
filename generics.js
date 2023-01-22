// Generics
function getArray(value) {
    return [value, value, value];
}
console.log(getArray(3));
console.log(getArray('hello'));
// Generics with Class
var MyData = /** @class */ (function () {
    function MyData(value) {
        this.value = value;
    }
    ;
    MyData.prototype.getArray = function () {
        return [this.value, this.value, this.value];
    };
    return MyData;
}());
var v1 = new MyData(123);
console.log(v1.getArray());
var v2 = new MyData('hello');
console.log(v2.getArray());
var MyData2 = /** @class */ (function () {
    function MyData2(value) {
        this.value = value;
    }
    ;
    MyData2.prototype.getArray = function () {
        return [this.value, this.value, this.value];
    };
    return MyData2;
}());
var v3 = new MyData2({ a: 1, b: 2 });
console.log(v3.getArray());
var v4 = new MyData2({ a: 100, b: 200, c: 'hello' });
console.log(v4.getArray());

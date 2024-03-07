var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
console.log("hello world");
// Type
// number, string, boolean, any
var i1 = 10;
var i2 = 10; // i: number
var x; // var x: any
x = 10;
x = "hello";
var results;
results = [10, 5, 3];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
console.log(Color.Blue);
(function (Color) {
    Color[Color["Yellow"] = 6] = "Yellow";
})(Color || (Color = {}));
console.log(Color['Yellow']);
console.log(Color[3]);
console.log('End');

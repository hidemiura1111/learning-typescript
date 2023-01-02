class User {

}
console.log("hello world");

// Type
// number, string, boolean, any

var i1: number = 10;
var i2 = 10; // i: number

var x; // var x: any
x = 10;
x = "hello";

var results: number[];
results = [10, 5, 3];


// enum
enum Color {
  Red, // 0
  Green = 3,
  Blue, // 4
}

console.log(Color.Blue);

enum Color {
  Yellow = 6,
}

console.log(Color['Yellow']);
console.log(Color[3]);


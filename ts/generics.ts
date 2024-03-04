// Generics

function getArray<T>(value: T): T[] {
    return [value, value, value];
}

console.log(getArray<number>(3));
console.log(getArray<string>('hello'));

// Generics with Class

class MyData<T> {
  constructor(public value: T) { };
  
  getArray(): T[] {
    return [this.value, this.value, this.value];
  }
}

var v1 = new MyData<number>(123);
console.log(v1.getArray());

var v2 = new MyData<string>('hello');
console.log(v2.getArray());

// Generics with Interface

interface Result {
  a: number,
  b: number,
}
interface Result2 {
  a: number,
  b: number,
  c: string,
}

class MyData2<T extends Result> {
  constructor(public value: T) { };
  
  getArray(): T[] {
    return [this.value, this.value, this.value];
  }
}

var v3 = new MyData2<Result>({ a: 1, b: 2});
console.log(v3.getArray());
var v4 = new MyData2<Result2>({ a: 100, b: 200, c: 'hello' });
console.log(v4.getArray());

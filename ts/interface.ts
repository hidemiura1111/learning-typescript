// Interface

interface FirstResult {
  a: number;
}

interface SecondResult {
  b: number;
}

interface Result extends FirstResult, SecondResult {
  c?: number;
}

function getTotal(result: Result) {
  if (result.c) {
    return result.a + result.b + result.c;
  } else {
    return result.a + result.b;
  }
}

var result_1 = {
  a: 10,
  b: 20,
  c: 30,
  name: 'John',
};

var result_2 = {
  a: 10,
  b: 20,
  name: 'Jane',
};

console.log(getTotal(result_1));
console.log(getTotal(result_2));

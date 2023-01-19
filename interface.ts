// Interface

interface Result {
  a: number;
  b: number;
}

function getTotal(result: Result) {
  return result.a + result.b;
}

var result = {
  a: 10,
  b: 20,
  c: 'Hello',
};

console.log(getTotal(result));
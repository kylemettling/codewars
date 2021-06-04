// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

function basicOp(operation, value1, value2) {
  //   return value1 + operation + value2;
  const funcs = {
    "+": (x, y) => {
      return x + y;
    },
    "-": (x, y) => {
      return x - y;
    },
    "*": (x, y) => {
      return x * y;
    },
    "/": (x, y) => {
      return x / y;
    },
  };

  return funcs[operation](value1, value2);
}

basicOp("+", 4, 7);
basicOp("-", 15, 18);
basicOp("*", 5, 5);
basicOp("/", 49, 7);

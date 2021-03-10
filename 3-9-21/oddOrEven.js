// https://www.codewars.com/kata/5949481f86420f59480000e7/solutions/javascript

function oddOrEven(array) {
  //enter code here
  let result = array.reduce((a, b) => a + b, 0);
  console.log(result % 2 === 0 ? "even" : "odd");
}

oddOrEven([0]);
oddOrEven([1]);
oddOrEven([]);

oddOrEven([0, 1, 5]);
oddOrEven([0, 1, 3]);
oddOrEven([1023, 1, 2]);

oddOrEven([0, -1, -5]);
oddOrEven([0, -1, -3]);
oddOrEven([-1023, 1, -2]);

oddOrEven([0, 1, 2]);
oddOrEven([0, 1, 4]);
oddOrEven([1023, 1, 3]);
oddOrEven([0, -1, 2]);
oddOrEven([0, 1, -4]);
oddOrEven([-1023, -1, 3]);

// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

var gimme = function (inputArray) {
  let sorted = [...inputArray];
  sorted = sorted.sort((a, b) => a - b);
  const middle = sorted[Math.floor(sorted.length / 2)];
  let index = inputArray.indexOf(middle);
  console.log(index);
};
gimme([2, 3, 1]);
gimme([5, 10, 14]);

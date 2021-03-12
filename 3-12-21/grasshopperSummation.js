// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/solutions/javascript

var summation = function (num) {
  let nums = [];
  for (i = 0; i <= num; i++) {
    nums.push(i);
  }
  let newNums = nums.reduce((a, b) => (b += a));
  console.log(newNums);
};

summation(1);
summation(8);

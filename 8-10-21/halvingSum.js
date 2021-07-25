// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript

function halvingSum(n) {
  let solution = n;
  while (n != 1) {
    n = Math.floor(n / 2);
    solution += n;
  }
  return solution;
}
console.log(halvingSum(25), 47);
console.log(halvingSum(127), 247);

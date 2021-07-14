// https://leetcode.com/problems/happy-number/

var isHappy = function (n) {
  let seen = {};
  while (n != 1 && !seen[n]) {
    seen[n] = true;
    n = n
      .toString()
      .split("")
      .reduce((a, c) => {
        return a + c ** 2;
      }, 0);
  }
  return n === 1;
};

console.log(isHappy(19));
console.log(isHappy(2));

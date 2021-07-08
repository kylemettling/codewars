// https://leetcode.com/problems/reverse-integer/

var reverse = function (x) {
  reverseN = 0;
  sign = x < 0;
  x = Math.abs(x);
  while (x) {
    reverseN = reverseN * 10 + (x % 10);
    x = Math.floor(x % 10);
  }
  return reverseN > 0x7fffffff ? 0 : sign ? -reverseN : reverseN;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(123));

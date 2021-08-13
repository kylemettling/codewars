// https://leetcode.com/problems/fibonacci-number/

const fibNum = (n) => (n < 2 ? n : fibNum(n - 1) + fibNum(n - 2));

console.log(fibNum(2));
console.log(fibNum(14));
console.log(fibNum(8));

// https://leetcode.com/problems/fibonacci-number/

const fibNum = (n) => (n < 2 ? n : fibNum(n - 1) + fibNum(n - 2));

console.log(fibNum(2));
console.log(fibNum(14));
console.log(fibNum(8));
console.log(fibNum(3));
console.log(fibNum(0));
console.log(fibNum(7));
console.log(fibNum(13));
console.log(fibNum(1));

// function fibNum(n) {
//     if(n < 2) {return n}
//     return fibNum(n - 1) + fibNum(n - 2)
// }

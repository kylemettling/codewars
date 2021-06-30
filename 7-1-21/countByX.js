// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

function countBy(x, n) {
  var z = [];
  for (i = x; i <= n; i++) {
    z.push(i);
  }
  return z;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));

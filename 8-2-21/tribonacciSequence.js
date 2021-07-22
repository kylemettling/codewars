// https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature, n) {
  for (i = 0; i < n - 3; i++) {
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
  }
  return signature;
}
console.log(tribonacci([0, 1, 1], 10), [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]);
console.log(tribonacci([1, 0, 0], 10), [1, 0, 0, 1, 1, 2, 4, 7, 13, 24]);
console.log(tribonacci([0, 0, 0], 10), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript

const removeConsecutiveDuplicates = (s) =>
  s
    .split(" ")
    .filter((el, i, arr) => arr[i] != arr[i - 1])
    .join(" ");

console.log(
  removeConsecutiveDuplicates(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);

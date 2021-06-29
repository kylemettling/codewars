// https://www.codewars.com/kata/583af10620dda4da270000c5/javascript

function mergeArrays(a, b) {
  const answer = [];

  for (i = 0; i < Math.max(a.length, b.length); i++) {
    if (i < a.length) answer.push(a[i]);
    if (i < b.length) answer.push(b[i]);
  }
  return answer;
}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"]));
console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]));
console.log(mergeArrays([2, 5, 8, 23, 67, 6], ["b", "r", "a", "u", "r", "s"]));
console.log(
  mergeArrays(
    ["b", "r", "a", "u", "r", "s", "e", "q", "z"],
    [2, 5, 8, 23, 67, 6]
  )
);

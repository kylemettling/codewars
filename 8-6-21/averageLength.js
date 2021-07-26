// https://www.codewars.com/kata/5a430359e1ce0e35540000b1/train/javascript

function averageLength(arr) {
  const avgLen = Math.round(
    arr.reduce((allLengths, el) => allLengths + el.length, 0) / arr.length
  );
  return arr.map((el) => el[0].repeat(avgLen));
}

console.log(averageLength(["u", "y"]), ["u", "y"]);
console.log(averageLength(["aa", "bbb", "cccc"]), ["aaa", "bbb", "ccc"]);
console.log(averageLength(["aa", "bb", "ddd", "eee"]), [
  "aaa",
  "bbb",
  "ddd",
  "eee",
]);

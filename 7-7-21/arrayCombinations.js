// https://www.codewars.com/kata/59e66e48fc3c499ec5000103/train/javascript

// function to return the count of unique combinations possible without duplicating any values.
function solve(arr) {
  // returning the count of unique array combinations
  return (
    // mapping over each array and returning a Set of the size of the array (without duplicates)
    arr
      .map((v) => new Set(v).size)
      // reduce the new Set (lengths of each arr in essence) and multiplies them together starting with 1 to return the count of unique array combos
      .reduce((v, w) => v * w, 1)
  );
}

// function solve(arr) {
//   const setArr = arr.map((arr) => Array.from(new Set(arr)));
//   return setArr.reduce((count, arr) => count * arr.length, 1);
// }

console.log(solve([[1, 2], [4], [5, 6]]));
console.log(
  solve([
    [1, 2],
    [4, 4],
    [5, 6, 6],
  ])
);
console.log(
  solve([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
console.log(
  solve([
    [1, 2, 3],
    [3, 4, 6, 6, 7],
    [8, 9, 10, 12, 5, 6],
  ])
);

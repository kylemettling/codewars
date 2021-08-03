// https://www.codewars.com/kata/57cc79ec484cf991c900018d/train/javascript

function dbSort(a) {
  const nums = a.filter((el) => typeof el === "number").sort((a, b) => a - b);
  const strings = a.filter((el) => typeof el === "string").sort();
  return nums.concat(strings);
}

console.log(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]);
console.log(dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]);
console.log(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [
  0,
  2,
  2,
  "Apple",
  "Banana",
  "Mango",
  "Orange",
]);
console.log(dbSort(["C", "W", "W", "W", 1, 2, 0]), [
  0,
  1,
  2,
  "C",
  "W",
  "W",
  "W",
]);
console.log(
  dbSort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"]),
  [46, 78, 574, "287", "3", "423", "69", "Apple", "Grape", "Peach"]
);

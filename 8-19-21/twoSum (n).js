function twoSum(arr, target) {
  const pairs = [];
  const store = {};

  for (let part1 of arr) {
    const part2 = target - part1;
    if (!store[part2]) store[part1] = 1;
    else pairs.push([part1, part2]);
  }
  return pairs;
}

console.log(twoSum([1, 2, 2, 3, 4], 4), [
  [2, 2],
  [3, 1],
]);

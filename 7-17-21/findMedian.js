// https://www.codewars.com/kata/5864eb8039c5ab9cd400005c/train/javascript

function median(array) {
  array = array.sort((a, b) => a - b);
  const findEven = array.length % 2 === 0;
  const middle = findEven
    ? array
        .slice(array.length / 2 - 1, array.length / 2 + 1)
        .reduce((a, c) => a + c) / 2
    : array[Math.floor(array.length / 2)];
  return middle;
}

console.log(median([33, 99, 100, 30, 29, 50]), 41.5);
console.log(median([3, 2, 1]), 2);

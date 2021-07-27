// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
  const odds = [];
  array.forEach((a) => a % 2 != 0 && odds.push(a));
  odds.sort((a, b) => a - b);
  return array.map((a) => (a % 2 != 0 ? (a = odds.shift()) : a));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);

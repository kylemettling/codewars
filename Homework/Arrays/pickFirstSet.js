// https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript

function first(arr, n = 1) {
  return arr.slice(0, n);
}

first(["a", "b", "c", "d", "e"]);
first([]);
first(["a", "b", "c", "d", "e"], 2);
first(["a", "b", "d", "s", "f"], 3);

// https://www.codewars.com/kata/559590633066759614000063/train/javascript

function minMax(arr) {
  arr = arr.sort((a, b) => a - b);
  const minimum = arr[0];
  const maximum = arr[arr.length - 1];
  console.log([minimum, maximum]);
}

minMax([1, 2, 3, 4, 5]);
minMax([2334454, 5]);
minMax([1]);

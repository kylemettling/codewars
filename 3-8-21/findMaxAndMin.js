// https://www.codewars.com/kata/577a98a6ae28071780000989

let min = function (list) {
  list = list.sort((a, b) => a - b);
  console.log(list[0]);
};

let max = function (list) {
  list = list.sort((a, b) => b - a);
  console.log(list[0]);
};

min([-52, 56, 30, 29, -54, 0, -110]);
min([42, 54, 65, 87, 0]);
max([4, 6, 2, 1, 9, 63, -134, 566]);
max([5]);

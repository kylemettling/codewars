// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

var capitals = function (word) {
  const caps = [];
  word
    .split("")
    .forEach((char, idx) => char === char.toUpperCase() && caps.push(idx));
  return caps;
};

console.log(capitals("CodEWaRs"));

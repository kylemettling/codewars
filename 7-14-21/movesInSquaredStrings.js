// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript

// takes in strng of \ separated clusters of chars
function vertMirror(strng) {
  return strng
    .split("\n")
    .map((el) => el.split("").reverse().join(""))
    .join("\n");
  // takes in strng of \ separated clusters of chars
}
function horMirror(strng) {
  // return the initial string split on new line, reversed and joined back
  return strng.split("\n").reverse().join("\n");
}
function oper(fct, s) {
  // return the assembled function call (higher order)
  return fct(s);
}

console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));
console.log(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"));
console.log(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"));
console.log(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz"));

// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

function last(x) {
  return x
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

console.log(last("man i need a taxi up to ubud"), [
  "a",
  "need",
  "ubud",
  "i",
  "taxi",
  "man",
  "to",
  "up",
]);
console.log(last("what time are we climbing up the volcano"), [
  "time",
  "are",
  "we",
  "the",
  "climbing",
  "volcano",
  "up",
  "what",
]);
console.log(last("take me to semynak"), ["take", "me", "semynak", "to"]);

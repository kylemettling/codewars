// https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript

function sumOfIntegersInString(s) {
  return s
    .replace(/\D/g, " ")
    .split(" ")
    .map((value) => Number(value))
    .reduce((a, b) => a + b);
}

console.log(sumOfIntegersInString("12.4"), 16);
console.log(sumOfIntegersInString("h3ll0w0rld"), 3);
console.log(sumOfIntegersInString("2 + 3 = "), 5);
console.log(
  sumOfIntegersInString(
    "Our company made approximately 1 million in gross revenue las)t quarter.",
    1
  )
);
console.log(
  sumOfIntegersInString("The Great Depression lasted from 1929 to 1939."),
  3868
);
console.log(sumOfIntegersInString("Dogs are our best friends."), 0);
console.log(sumOfIntegersInString("C4t5 are 4m4z1ng."), 18);
console.log(
  sumOfIntegersInString(
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
  ),
  363
);

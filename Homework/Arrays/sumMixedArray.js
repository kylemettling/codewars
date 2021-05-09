// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

function sumMix(x) {
  console.log(x.reduce((acc, curr) => (acc += Number(curr)), 0));
}

sumMix([9, 3, "7", "3"]);
sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]);
sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]);

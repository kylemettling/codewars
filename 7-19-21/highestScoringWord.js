// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letters = alphabet.split("");
  const alphas = {};
  letters.forEach((char, index) => {
    alphas[char] = index + 1;
  });
  let copy = x
    .slice()
    .split(" ")
    .map((word) =>
      word.split("").reduce((count, char) => (count += alphas[char]), 0)
    );
  return x.split(" ")[copy.indexOf(Math.max(...copy))];
}

console.log(high("man i need a taxi up to ubud"), "taxi");
console.log(high("what time are we climbing up the volcano"), "volcano");
console.log(high("take me to semynak"), "semynak");
console.log(high("aa b"), "aa");
console.log(high("b aa"), "b");
console.log(high("bb d"), "bb");
console.log(high("d bb"), "d");
console.log(high("aaa b"), "aaa");

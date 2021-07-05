// https://www.codewars.com/kata/5b6ee22ac5cc71833f0010d7/train/javascript

function kaprekarSplit(n) {
  if (n === 1) return 0;
  const squared = (n ** 2).toString();
  for (i = 0; i < squared.length; i++) {
    if (
      parseInt(squared.substring(0, i)) +
        parseInt(squared.substring(i, squared.length)) ===
      n
    )
      return i;
  }
  return -1;
}

console.log(kaprekarSplit(1));
console.log(kaprekarSplit(9));
console.log(kaprekarSplit(45));
console.log(kaprekarSplit(2223));
console.log(kaprekarSplit(5050));
console.log(kaprekarSplit(5051));

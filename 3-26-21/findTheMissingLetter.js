// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

function findMissingLetter(array) {
  const validLetters = "abcdefghijklmnopqrstuvwxyz".split("");
  let lowerCase = true;
  array[0] === array[0].toUpperCase() ? (lowerCase = !lowerCase) : null;
  const arr = [];
  array.forEach((a, b) => {
    const refIndex = !lowerCase
      ? validLetters.indexOf(a.toLowerCase())
      : validLetters.indexOf(a);
    arr.push(refIndex);
  });
  let result = arr.reduce((a, b) => (b += a), 0);
  const start = arr[0];
  const end = arr[arr.length - 1];
  let idealResult = Array.from(
    { length: end + 1 - start },
    (x, i) => i + start
  ).reduce((a, b) => (b += a), 0);
  const finalResult = validLetters[idealResult - result];
  console.log(lowerCase ? finalResult : finalResult.toUpperCase());
}

findMissingLetter(["a", "b", "c", "d", "f"]);
findMissingLetter(["O", "Q", "R", "S"]);

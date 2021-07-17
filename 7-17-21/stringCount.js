// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

function strCount(str, letter) {
  const charCount = str.split("").reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});
  return !charCount[letter] ? 0 : charCount[letter];
}

console.log(strCount("Hello", "o"), 1);
console.log(strCount("Hello", "l"), 2);
console.log(strCount("", "z"), 0);

// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

function removeExclamationMarks(s) {
  s = s
    .split("")
    .map((a, b) => (a === "!" ? (a = "") : a))
    .join("");
  console.log(s);
}

removeExclamationMarks("Hello World!!!");

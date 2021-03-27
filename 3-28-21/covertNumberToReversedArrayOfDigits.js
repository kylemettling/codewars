// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
  let newArr = n
    .toString()
    .split("")
    .reverse()
    .map((a, b) => Number(a));
  console.log(newArr);
}

digitize(35231);

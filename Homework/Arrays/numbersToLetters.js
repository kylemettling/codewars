// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

function switcher(x) {
  const bank = [
    "z",
    "y",
    "x",
    "w",
    "v",
    "u",
    "t",
    "s",
    "r",
    "q",
    "p",
    "o",
    "n",
    "m",
    "l",
    "k",
    "j",
    "i",
    "h",
    "g",
    "f",
    "e",
    "d",
    "c",
    "b",
    "a",
    "!",
    "?",
    " ",
  ];
  let answer = [];
  x.forEach((a, b) => {
    answer.push(bank[Number(a) - 1]);
  });

  console.log(answer.join(""));
}
switcher(["24", "12", "23", "22", "4", "26", "9", "8"]);
switcher([
  "25",
  "7",
  "8",
  "4",
  "14",
  "23",
  "8",
  "25",
  "23",
  "29",
  "16",
  "16",
  "4",
]);
switcher(["4", "24"]);

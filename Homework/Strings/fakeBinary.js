// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x) {
  x = x
    .split("")
    .map((a, b) => (parseInt(a) >= 5 ? (a = 1) : (a = 0)))
    .join("");
  return x;
}

fakeBin("45385593107843568");
fakeBin("509321967506747");
fakeBin("366058562030849490134388085");

// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data) {
  // ...
  let newData = [];
  data.filter((a, b) =>
    a[0] >= 55 && a[1] > 7 ? (newData[b] = "Senior") : (newData[b] = "Open")
  );
  console.log(newData);
}

openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);
openOrSenior([
  [3, 12],
  [55, 1],
  [91, -2],
  [54, 23],
]);
openOrSenior([
  [59, 12],
  [55, -1],
  [12, -2],
  [12, 12],
]);

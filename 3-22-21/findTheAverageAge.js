// https://www.codewars.com/kata/582ba36cc1901399a70005fc/train/javascript

function getAverageAge(list) {
  let total = 0;
  list.length > 1
    ? list.forEach((a, b) => (total += a["age"]))
    : (total = list.length);
  console.log(Math.round(total / list.length));
}

var list1 = [
  {
    firstName: "Maria",
    lastName: "Y.",
    country: "Cyprus",
    continent: "Europe",
    age: 30,
    language: "Java",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 70,
    language: "Python",
  },
];
var list2 = [
  {
    firstName: "Noa",
    lastName: "A.",
    country: "Israel",
    continent: "Asia",
    age: 20,
    language: "Ruby",
  },
  {
    firstName: "Andrei",
    lastName: "E.",
    country: "Romania",
    continent: "Europe",
    age: 21,
    language: "C",
  },
];

getAverageAge(list1);
getAverageAge(list2);

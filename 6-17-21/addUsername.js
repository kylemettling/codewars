// https://www.codewars.com/kata/582a53ed261c2af9d200018c/train/javascript

function addUsername(list) {
  const currentYear = new Date().getFullYear();

  const answer = list.map((a) => {
    a.username = `${a.firstName.toLowerCase()}${a.lastName[0].toLowerCase()}${
      currentYear - a.age
    }`;
    return a;
  });
  return answer;
}

var list1 = [
  {
    firstName: "Emily",
    lastName: "N.",
    country: "Ireland",
    continent: "Europe",
    age: 30,
    language: "Ruby",
  },
  {
    firstName: "Nor",
    lastName: "E.",
    country: "Malaysia",
    continent: "Asia",
    age: 20,
    language: "Clojure",
  },
];

addUsername(list1);

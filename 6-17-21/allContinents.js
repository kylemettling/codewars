// https://www.codewars.com/kata/58291fea7ff3f640980000f9/train/javascript

function allContinents(list) {
  const newList = list.reduce((continents, currentDev) => {
    if (continents[currentDev.continent]) {
      continents[currentDev.continent]++;
    } else {
      continents[currentDev.continent] = 1;
    }
    return continents;
  }, {});
  return Object.keys(newList).length === 5 ? true : false;
}

var list1 = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europe",
    age: 55,
    language: "Ruby",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
];

var list2 = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
];

allContinents(list1);
allContinents(list2);

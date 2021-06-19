// https://www.codewars.com/kata/583952fbc23341c7180002fd/train/javascript

function orderFood(list) {
  const answer = list.reduce((allFoods, currentDev) => {
    if (allFoods[currentDev.meal]) {
      allFoods[currentDev.meal]++;
    } else {
      allFoods[currentDev.meal] = 1;
    }
    return allFoods;
  }, {});
  return answer;
}

var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    meal: "vegetarian",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    meal: "standard",
  },
  {
    firstName: "Ramona",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    meal: "vegan",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    meal: "vegetarian",
  },
];

orderFood(list1);

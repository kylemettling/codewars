// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

function feast(beast, dish) {
  beast = beast.split("");
  dish = dish.split("");
  let beastLetters = {};
  let dishLetters = {};
  beastLetters.first = beast[0];
  beastLetters.last = beast[beast.length - 1];
  dishLetters.first = dish[0];
  dishLetters.last = dish[dish.length - 1];
  if (
    beastLetters.first === dishLetters.first &&
    beastLetters.last === dishLetters.last
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
}

feast("great blue heron", "garlic naan");
feast("chickadee", "chocolate cake");
feast("brown bear", "bear claw");

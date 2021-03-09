// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let newStr = str.split("");
  newStr = newStr.filter((a, b) =>
    vowels.includes(a) || vowels.includes(a.toLowerCase()) ? "" : a
  );
  console.log(newStr.join(""));
}

disemvowel("This website is for losers LOL!");

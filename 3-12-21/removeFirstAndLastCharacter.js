// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str) {
  str = str.split("");
  str.shift(0);
  str.pop(str.length - 1);
  str = str.join("");
  console.log(str);
}

removeChar("eloquent");
removeChar("country");
removeChar("person");
removeChar("place");

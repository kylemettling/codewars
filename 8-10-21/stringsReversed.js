function stringReverse(str) {
  return str
    .split("")
    .map((el, i) => (el = str[str.length - 1 - i]))
    .join("");
}

console.log(stringReverse("Hello it is a string"));
console.log(stringReverse("This is another string"));
console.log(stringReverse("LOL a str"));

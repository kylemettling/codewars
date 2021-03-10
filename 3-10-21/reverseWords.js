// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/solutions/javascript

function reverseWords(str) {
  str = str.split(" ");
  //   console.log(str);
  //   str = str.forEach((a, b) => a.split("").reverse().join(""));
  str = str.map((a, b) => a.split("").reverse().join("")).join(" ");
  console.log(str);
}

reverseWords("The quick brown fox jumps over the lazy dog.");
reverseWords("apple");
reverseWords("a b c d");
reverseWords("double  spaced  words");

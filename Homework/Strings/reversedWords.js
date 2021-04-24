// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

function reverseWords(str) {
  str = str.split(" ").reverse().join(" ");
  return str;
}

reverseWords("hello world!");
reverseWords("yoda doesn't speak like this");
reverseWords("foobar");
reverseWords("kata editor");
reverseWords("row row row your boat");

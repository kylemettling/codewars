// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/solutions/javascript

function solution(str, ending) {
  // TODO: complete
  let testEnding = str.slice(str.length - ending.length, str.length);
  console.log(testEnding === ending);
}

solution("abcde", "cde");
solution("abcde", "abc");

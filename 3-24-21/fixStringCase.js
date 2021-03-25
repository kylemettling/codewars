// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

function solve(s) {
  let lowerCount = 0;
  //   let lower = 0;
  s.split("").forEach((a, b) => (a === a.toLowerCase() ? lowerCount++ : null));
  console.log(lowerCount);
  s.length / 2 > lowerCount
    ? (s = s.split("").map((a, b) => a.toUpperCase()))
    : (s = s.split("").map((a, b) => a.toLowerCase()));
  console.log(s);
}

solve("code");
solve("CODe");
solve("COde");
solve("Code");

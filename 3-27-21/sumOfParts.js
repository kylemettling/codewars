// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript

function partsSums(ls) {
  const arr = [];
  for (i = 0; i <= ls.length; i++) {
    arr.push(ls.slice(i, ls.length).reduce((a, b) => (b += a), 0));
  }
  console.log(arr);
}

partsSums([]);
partsSums([0, 1, 3, 6, 10]);
partsSums([1, 2, 3, 4, 5, 6]);
partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]);

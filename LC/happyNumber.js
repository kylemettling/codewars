// https://leetcode.com/problems/happy-number/

var isHappy = function (n) {
  let seen = {};
  while (n != 1 && !seen[n]) {
    seen[n] = true;
    console.log(`before reduce: ${n}`);
    n = n
      .toString()
      .split("")
      .reduce((a, c) => {
        return a + c ** 2;
      }, 0);
    // console.log(`after reduce: ${n}`);
    // console.log(`seen: ${Object.keys(seen).join(", ")}`);
    // console.log(
    //   n
    //     .toString()
    //     .split("")
    //     .reduce((a, c) => {
    //       return a + c ** 2;
    //     }, 0)
    // );
  }
  return n === 1;
};

console.log(isHappy(19));
console.log(isHappy(2));

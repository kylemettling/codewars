// https://leetcode.com/problems/house-robber/

var rob = function (nums) {
  //   return Math.max(
  //     ...Object.values(
  //       nums.reduce((allMoney, cur, idx) => {
  //         if (idx % 2 === 0) {
  //           if (allMoney["even"]) {
  //             allMoney["even"] += cur;
  //           } else {
  //             allMoney["even"] = cur;
  //           }
  //         } else {
  //           if (idx % 2 != 0)
  //             if (allMoney["odd"]) {
  //               allMoney["odd"] += cur;
  //             } else {
  //               allMoney["odd"] = cur;
  //             }
  //         }
  //         return allMoney;
  //       }, {})
  //     )
  //   );

  if (nums.length === 0) {
    // console.log("lol");
    return 0;
  }
  let prev1 = 0;
  let prev2 = 0;
  for (num of nums) {
    // console.log(num);
    let tmp = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    // console.log(`tmp: ${tmp}, prev1: ${prev1}`);
    prev2 = tmp;
    // console.log(`prev2: ${prev2}`);
  }
  return prev1;
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([]));
console.log(rob([2, 7, 9, 3, 1]));

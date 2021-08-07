// https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function (jewels, stones) {
  let result = 0;
  const stoneCount = stones
    .split("")
    .reduce((acc, cur) => (acc[cur] = acc[cur] + 1 || 1), {});
  return stoneCount;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));

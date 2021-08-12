// https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function (jewels, stones) {
  let result = 0;
  const map = {};

  for (let char of jewels) {
    map[char] = true;
  }
  for (let char of stones) {
    if (map[char]) {
      result++;
    }
  }
  return result;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));

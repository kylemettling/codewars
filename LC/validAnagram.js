// https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
// console.log(isAnagram("rat", "cart"));

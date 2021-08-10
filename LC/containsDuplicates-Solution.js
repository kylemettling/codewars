// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function (arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = map[arr[i]] + 1 || 1;
    if (map[arr[i]] > 1) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 3, 1]));

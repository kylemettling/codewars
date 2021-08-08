// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function (nums) {
  const count = nums.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1;
    } else {
      acc[cur]++;
    }
    return acc;
  }, {});
  for (const num in count) {
    if (count[num] !== 1) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 3, 1]));

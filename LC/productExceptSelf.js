// https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function (nums) {
  const copy = nums.slice();
  const answer = [];
  for (i = 0; i < nums.length; i++) {
    let otherCopy = copy.slice();
    otherCopy.splice(i, 1);

    answer.push(
      otherCopy.reduce((product, num) => {
        product *= num === -0 ? 0 : num;

        return product === -0 ? 0 : product;
      }, 1)
    );
  }
  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));

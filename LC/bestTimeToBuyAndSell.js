// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  length = prices.length;
  if (length < 2) {
    return 0;
  }
  let maxProfit = 0;
  let minAmount = prices[0];
  for (price of prices) {
    maxProfit = Math.max(maxProfit, price - minAmount);
    minAmount = Math.min(minAmount, price);
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 2]));

/**
 * @param {number[]} prices
 * @return {number}
 */

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)

var maxProfit = function (prices) {
  let minValue = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - minValue > profit) {
      profit = prices[i] - minValue;
    }
    if (prices[i] < minValue) {
      minValue = prices[i];
    }
  }

  return profit;
};

/**
 * @param {number[]} prices
 * @return {number[]}
 */

// Solution 2 - Using stack
// Time complexity: O(n)
// Space complexity: O(n)

var finalPrices = function (prices) {
  let stack = [];
  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] <= prices[stack[stack.length - 1]]) {
      prices[stack.pop()] -= prices[i];
    }
    stack.push(i);
  }
  return prices;
};

// Solution 1 - Using two loops
// Time complexity: O(n^2)
// Space complexity: O(1)

var finalPrices = function (prices) {
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        prices[i] = prices[i] - prices[j];
        break;
      }
    }
  }
  return prices;
};

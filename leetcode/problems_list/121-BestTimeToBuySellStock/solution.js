/**
 * @param {number[]} prices
 * @return {number}
 */

// WIP

var maxProfit = function (prices) {
  if (prices.lenght === 1) return 0;

  let minValue = [Math.min(...prices), prices.indexOf(Math.min(...prices))];
  let maxValue = minValue[0];

  for (let i = minValue[1]; i < prices.length; i++) {
    if (prices[i] > maxValue) maxValue = prices[i];
  }

  return maxValue - minValue[0];
};

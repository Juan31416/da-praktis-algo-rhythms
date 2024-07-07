/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
// Solution 2
// Time Complexity: O(log(numBottles))
// Space Complexity: O(1)

var numWaterBottles = function (numBottles, numExchange) {
  let drinkedBottles = numBottles;
  let emptyBottles = numBottles;

  while (emptyBottles >= numExchange) {
    let exchangeBottles = Math.floor(emptyBottles / numExchange);
    drinkedBottles += exchangeBottles;
    emptyBottles = exchangeBottles + (emptyBottles % numExchange);
  }
  return drinkedBottles;
};

// Solution 1
// Time Complexity: O(log(numBottles))
// Space Complexity: O(1)

var numWaterBottles = function (numBottles, numExchange) {
  let allBottles = [numBottles, 0];
  let drinkedBottles = 0;

  while (allBottles[0] > 0) {
    // Drink Bottles
    drinkedBottles += allBottles[0];
    allBottles[1] += allBottles[0];
    allBottles[0] = 0;
    // Exchange Bottles
    allBottles[0] = Math.floor(allBottles[1] / numExchange);
    allBottles[1] = allBottles[1] % numExchange;
  }
  return drinkedBottles;
};

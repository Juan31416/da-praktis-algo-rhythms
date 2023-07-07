/**
 * Non-Constructible Change
 * Input: array of positive integers representing the values of coins in your possession
 * Output: the minimum amount of change (the minimum sum of money) that you cannot create
 * Assumptions: you can always create change for 0
 */

function nonConsctructibleChange(coins) {
  if (!coins.length) return 1;
  let currentChange = 0;
  coins
    .sort((a, b) => a - b)
    .forEach((curr) => {
      if (!(curr > currentChange + 1)) currentChange += curr;
    });
  return currentChange + 1;
}

exports.nonConsctructibleChange = nonConsctructibleChange;

/**
 * Solution 1
 * Sort and iterate approach
 * Time: O(n log n)
 * Space: O(1)
 * Sort the input array in ascending order
 * Iterate through the array and for each coin, check if it is not greater than the current change + 1
 * Add the coin to the current change
 * Return the current change + 1
 * Edge cases: empty array, array with one element, array with two elements
 * Assumptions: you can always create change for 0
 * Test cases:
 * [1, 2, 5] => 4
 * [5, 7, 1, 1, 2, 3, 22] => 20
 * [1, 1, 1, 1, 1] => 6
 * [1, 5, 1, 1, 1, 10, 15, 20, 100] => 55
 * */

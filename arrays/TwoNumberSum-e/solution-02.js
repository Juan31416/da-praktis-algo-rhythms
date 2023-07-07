/**
 * Two Number Sum
 * Input: non-empty array of distinct integers, and an integer representing a target sum
 * Output: array of two numbers that add up to the target sum
 * Assumptions: there will be at most one pair of numbers summing up to the target sum
 */

// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
  let pair = [];
  for (const curr of array) {
    const diff = targetSum - curr;
    if (diff in array && diff !== curr) {
      pair = [curr, diff];
    }
  }
  return pair;
}

exports.twoNumberSum = twoNumberSum;

/**
 * Solution 2
 * Difference approach
 * Time: O(n)
 * Space: O(n)
 * Iterate through the array and for each number, calculate the difference between the target sum and the current number
 * If the difference is in the array and is not the current number, return the pair
 * Otherwise, return an empty array
 * Edge cases: empty array, array with one element, array with two elements
 * Assumptions: there will be at most one pair of numbers summing up to the target sum
 * Test cases:
 * [1, 2, 3, 4, 5], 6 => [1, 5]
 * [1, 2, 3, 4, 5], 4 => [1, 3]
 * [1, 2, 3, 4, 5], 3 => [1, 2]
 * */

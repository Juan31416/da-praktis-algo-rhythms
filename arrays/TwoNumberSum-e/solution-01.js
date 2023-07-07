/**
 * Two Number Sum
 * Input: non-empty array of distinct integers, and an integer representing a target sum
 * Output: array of two numbers that add up to the target sum
 * Assumptions: there will be at most one pair of numbers summing up to the target sum
 *
 */

// O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

/**
 * Solution 1
 * Brute force approach
 * Time: O(n^2)
 * Space: O(1)
 * Iterate through the array and for each number, iterate through the rest of the array to find a pair that sums up to the target sum
 * Return the pair if found, otherwise return an empty array
 * Edge cases: empty array, array with one element, array with two elements
 * Assumptions: there will be at most one pair of numbers summing up to the target sum
 * Test cases:
 * [1, 2, 3, 4, 5], 6 => [1, 5]
 * [1, 2, 3, 4, 5], 4 => [1, 3]
 * [1, 2, 3, 4, 5], 3 => [1, 2]
 * */

exports.twoNumberSum = twoNumberSum;

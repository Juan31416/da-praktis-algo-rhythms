/**
 * Validate Subsequence
 * Input: two non-empty arrays of integers
 * Output: boolean representing whether the second array is a subsequence of the first one
 * Assumptions: a single element counts as a subsequence of an array
 */

function isValidSubsequence(array, sequence) {
  // (O)n time | O(1) space
  let finalCount = 0;
  for (const curr of array) {
    if (curr === sequence[finalCount]) {
      finalCount++;
    }
  }
  return finalCount === sequence.length;
}

exports.isValidSubsequence = isValidSubsequence;

/**
 * Solution 3
 * Iterative approach
 * Time: O(n)
 * Space: O(1)
 * Iterate through the first array and for each number, check if it is equal to the current number in the second array
 * If it is, increment a counter
 * If the counter is equal to the length of the second array, return true
 * Otherwise, return false
 * Edge cases: empty array, array with one element, array with two elements
 * Assumptions: a single element counts as a subsequence of an array
 * Test cases:
 * [1, 2, 3, 4, 5], [1, 3, 5] => true
 * [1, 2, 3, 4, 5], [1, 3, 6] => false
 * [1, 2, 3, 4, 5], [1, 3, 4] => false
 * */

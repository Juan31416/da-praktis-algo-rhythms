/**
 * Validate Subsequence
 * Input: two non-empty arrays of integers
 * Output: boolean representing whether the second array is a subsequence of the first one
 * Assumptions: a single element counts as a subsequence of an array
 */

function isValidSubsequence(array, sequence) {
  // O(n) time | O(n) space
  const filteredArray = array.filter((curr) => sequence.includes(curr));
  return sequence.every((curr, index) => curr === filteredArray[index]);
}

exports.isValidSubsequence = isValidSubsequence;

/**
 * Solution 2
 * Filter approach
 * Time: O(n)
 * Space: O(n)
 * Filter the first array to only include elements that are in the second array
 * If the filtered array is equal to the second array, return true
 * Otherwise, return false
 * Edge cases: empty array, array with one element, array with two elements
 * Assumptions: a single element counts as a subsequence of an array
 * Test cases:
 * [1, 2, 3, 4, 5], [1, 3, 5] => true
 * [1, 2, 3, 4, 5], [1, 3, 6] => false
 * [1, 2, 3, 4, 5], [1, 3, 4] => false
 * */

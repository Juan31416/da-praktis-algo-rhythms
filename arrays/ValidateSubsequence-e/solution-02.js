/**
 * Validate Subsequence
 * Input: two non-empty arrays of integers
 * Output: boolean representing whether the second array is a subsequence of the first one
 * Assumptions: a single element counts as a subsequence of an array
 */

function isValidSubsequence(array, sequence) {
  // O(n) time | O(1) space
  const checkingArray = [];

  array.forEach((curr) => {
    if (sequence.includes(curr)) {
      checkingArray.push(curr);
    }
  });

  return sequence.every((curr, index) => curr === checkingArray[index]);
}

exports.isValidSubsequence = isValidSubsequence;

/**
 * Solution 1
 * Brute force approach
 * Time: O(n)
 * Space: O(1)
 * Iterate through the first array and for each number, check if it is in the second array
 * If it is, add it to a checking array
 * If the checking array is equal to the second array, return true
 * Otherwise, return false
 * Edge cases: empty array, array with one element, array with two elements
 * Assumptions: a single element counts as a subsequence of an array
 * Test cases:
 * [1, 2, 3, 4, 5], [1, 3, 5] => true
 * [1, 2, 3, 4, 5], [1, 3, 6] => false
 * [1, 2, 3, 4, 5], [1, 3, 4] => false
 * */

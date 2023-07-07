/**
 * Sorted Squared Array
 * Input: non-empty array of integers sorted in ascending order
 * Output: non-empty array of integers sorted in ascending order
 * Assumptions: the input array will always have at least one element
 */

function sortedSquaredArray(array) {
  // O(n log n) time | O(n) space
  const poweredArray = array.map((curr) => curr * curr).sort((a, b) => a - b);
  return poweredArray;
}

exports.sortedSquaredArray = sortedSquaredArray;

/**
 * Solution 1
 * Map and sort approach
 * Time: O(n log n)
 * Space: O(n)
 * Map over the input array and square each element
 * Sort the array in ascending order
 * Return the sorted array
 * Edge cases: empty array, array with one element, array with two elements
 * Assumptions: the input array will always have at least one element
 * Test cases:
 * [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
 * [-5, -4, -3, -2, -1] => [1, 4, 9, 16, 25]
 * [-5, -4, -3, -2, -1, 0] => [0, 1, 4, 9, 16, 25]
 * */

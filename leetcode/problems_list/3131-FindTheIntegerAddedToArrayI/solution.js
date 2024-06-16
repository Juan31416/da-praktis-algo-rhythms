/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// Solution 2 - Math min
// Time Complexity: O(n)
// Space Complexity: O(1)

var addedInteger = function (nums1, nums2) {
  return Math.min(...nums2) - Math.min(...nums1);
};

// Solution 1 - Sort
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
var addedInteger = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  return nums2[0] - nums1[0];
};

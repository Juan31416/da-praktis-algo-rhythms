/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */

// Solution 1
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var numberOfPairs = function (nums1, nums2, k) {
  let pairCount = 0;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] % (nums2[j] * k) === 0) pairCount++;
    }
  }

  return pairCount;
};

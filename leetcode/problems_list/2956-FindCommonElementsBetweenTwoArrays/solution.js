/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Solution 2 - Reduce
// Time Complexity: O(n)
// Space Complexity: O(n)

var findIntersectionValues = function (nums1, nums2) {
  let intersection = [0, 0];

  intersection[0] = nums1.reduce(
    (acc, curr) => (nums2.includes(curr) ? acc + 1 : acc),
    0
  );

  intersection[1] = nums2.reduce(
    (acc, curr) => (nums1.includes(curr) ? acc + 1 : acc),
    0
  );

  return intersection;
};

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(n)

var findIntersectionValues = function (nums1, nums2) {
  let intersection = [0, 0];

  for (let i = 0; i < nums1.length; i++) {
    intersection[0] = nums2.includes(nums1[i])
      ? intersection[0] + 1
      : intersection[0];
  }
  for (let i = 0; i < nums2.length; i++) {
    intersection[1] = nums1.includes(nums2[i])
      ? intersection[1] + 1
      : intersection[1];
  }

  return intersection;
};

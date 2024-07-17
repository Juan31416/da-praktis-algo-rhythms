/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Solution 2 - Two Sets
// Time Complexity: O(n)
// Space Complexity: O(n)

var intersection = function (nums1, nums2) {
  set_nums1 = new Set(nums1);
  set_nums2 = new Set(nums2);
  result = [...set_nums1].filter((x) => set_nums2.has(x));

  return result;
};

// Solution 1 - Set
// Time Complexity: O(n)
// Space Complexity: O(n)

var intersection = function (nums1, nums2) {
  let numsIntersection = new Set();
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) numsIntersection.add(nums1[i]);
  }

  return Array.from(numsIntersection);
};

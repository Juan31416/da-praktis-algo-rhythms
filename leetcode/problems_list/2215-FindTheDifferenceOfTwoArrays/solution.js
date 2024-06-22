/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
// Solution 2 - Using filter and set
// Time complexity: O(n)
// Space complexity: O(n)

var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  return [
    [...set1].filter((s) => !set2.has(s)),
    [...set2].filter((s) => !set1.has(s)),
  ];
};

// Solution 1 - For loop
// Time complexity: O(n)
// Space complexity: O(n)

var findDifference = function (nums1, nums2) {
  let uniqueElements = [[], []];

  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i]) && !uniqueElements[0].includes(nums1[i])) {
      uniqueElements[0].push(nums1[i]);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i]) && !uniqueElements[1].includes(nums2[i])) {
      uniqueElements[1].push(nums2[i]);
    }
  }
  return uniqueElements;
};

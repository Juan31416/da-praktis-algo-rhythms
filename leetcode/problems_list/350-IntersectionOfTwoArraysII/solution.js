/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Solution 2 - Hash Map
// Time Complexity: O(n)
// Space Complexity: O(n)

var intersect = function (nums1, nums2) {
  let result = [];
  let map = {};

  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]]) {
      map[nums1[i]]++;
    } else {
      map[nums1[i]] = 1;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]] > 0) {
      result.push(nums2[i]);
      map[nums2[i]]--;
    }
  }

  return result;
};

// Solution 1 - For Loops and Splice
// Time Complexity: O(n)
// Space Complexity: O(n)

var intersect = function (nums1, nums2) {
  let result = [];

  if (nums1.length < nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.indexOf(nums1[i]) > -1) {
        nums2.splice(nums2.indexOf(nums1[i]), 1);
        result.push(nums1[i]);
      }
    }
    return result;
  }

  if (nums1.length > nums2.length) {
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.indexOf(nums2[i]) > -1) {
        nums1.splice(nums1.indexOf(nums2[i]), 1);
        result.push(nums2[i]);
      }
    }
    return result;
  }

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.indexOf(nums1[i]) > -1) {
      nums2.splice(nums2.indexOf(nums1[i]), 1);
      result.push(nums1[i]);
    }
  }
  return result;
};

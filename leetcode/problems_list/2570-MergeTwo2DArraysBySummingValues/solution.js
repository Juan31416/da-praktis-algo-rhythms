/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */

// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(n)

var mergeArrays = function (nums1, nums2) {
  const mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i][0] < nums2[j][0]) {
      mergedArr.push(nums1[i]);
      i++;
    } else if (nums1[i][0] > nums2[j][0]) {
      mergedArr.push(nums2[j]);
      j++;
    } else {
      mergedArr.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
      i++;
      j++;
    }
  }

  while (i < nums1.length) {
    mergedArr.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    mergedArr.push(nums2[j]);
    j++;
  }

  return mergedArr;
};

// Solution 1
// Time Complexity: O(nlogn)
// Space Complexity: O(n)

var mergeArrays = function (nums1, nums2) {
  const mappedArr = new Map();
  const mergedArr = [];
  for (let i = 0; i < nums1.length; i++) {
    mappedArr.set(nums1[i][0], (mappedArr.get(nums1[i][0]) || 0) + nums1[i][1]);
  }

  for (let i = 0; i < nums2.length; i++) {
    mappedArr.set(nums2[i][0], (mappedArr.get(nums2[i][0]) || 0) + nums2[i][1]);
  }
  mappedArr.forEach((value, key) => {
    mergedArr.push([key, value]);
  });

  return mergedArr.sort((a, b) => a[0] - b[0]);
};

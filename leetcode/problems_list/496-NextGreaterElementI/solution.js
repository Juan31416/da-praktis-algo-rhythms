/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(n)

var nextGreaterElement = function (nums1, nums2) {
  const nextGElement = [];
  const stack = [];
  const map = {};

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      map[stack.pop()] = nums2[i];
    }
    stack.push(nums2[i]);
  }

  for (let i = 0; i < nums1.length; i++) {
    nextGElement.push(map[nums1[i]] || -1);
  }

  return nextGElement;
};

// Solution 1
// Time Complexity: O(n^2)
// Space Complexity: O(n)

var nextGreaterElement = function (nums1, nums2) {
  const nextGElement = [];

  for (let i = 0; i < nums1.length; i++) {
    let idx2 = nums2.indexOf(nums1[i]);
    let nxEl = nums1[i];

    if (idx2 === nums2.length - 1) {
      nextGElement.push(-1);
    } else {
      for (let j = idx2; j < nums2.length; j++) {
        if (nums2[j] > nxEl) {
          nxEl = nums2[j];
          break;
        }
      }
      if (nxEl !== nums1[i]) {
        nextGElement.push(nxEl);
      } else {
        nextGElement.push(-1);
      }
    }
  }

  return nextGElement;
};

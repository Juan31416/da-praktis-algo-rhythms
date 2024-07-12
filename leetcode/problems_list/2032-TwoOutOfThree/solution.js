/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */

// Solution 3
// Time complexity: O(n)
// Space complexity: O(n)

var twoOutOfThree = function (nums1, nums2, nums3) {
  let arr = [];
  for (val of nums1) {
    if (nums2.includes(val) || nums3.includes(val)) {
      arr.push(val);
    }
  }
  for (val of nums2) {
    if (nums1.includes(val) || nums3.includes(val)) {
      arr.push(val);
    }
  }
  arr = new Set(arr);
  arr = Array.from(arr);
  return arr;
};

// Solution 2
// Time complexity: O(n)
// Space complexity: O(n)

var twoOutOfThree = function (nums1, nums2, nums3) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set(nums3);
  const map = new Map();

  for (const num of set1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of set2) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of set3) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const result = [];

  for (const [key, value] of map) {
    if (value >= 2) result.push(key);
  }

  return result;
};

// Solution 1 - Array, Sets and for loop
// Time complexity: O(nlogn)
// Space complexity: O(n)

var twoOutOfThree = function (nums1, nums2, nums3) {
  const newArr = [
    Array.from(new Set(nums1)),
    Array.from(new Set(nums2)),
    Array.from(new Set(nums3)),
  ]
    .flat()
    .sort((a, b) => a - b);

  let dosDeTres = new Set();

  for (let i = 0; i < newArr.length; i++) {
    if (newArr.lastIndexOf(newArr[i]) !== i) dosDeTres.add(newArr[i]);
  }

  return Array.from(dosDeTres);
};

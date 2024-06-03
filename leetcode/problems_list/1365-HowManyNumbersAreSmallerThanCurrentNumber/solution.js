/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solutions 2 - Counting Sort
// Time Complexity: O(n)
// Space Complexity: O(n)

var smallerNumbersThanCurrent = function (nums) {
  let count = new Array(101).fill(0);
  let sum = new Array(101).fill(0);

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }

  for (let i = 1; i < 101; i++) {
    sum[i] = sum[i - 1] + count[i - 1];
  }

  return nums.map((a) => sum[a]);
};

// Solutions 1 - Hash Map and Sorting
// Time Complexity: O(nlogn) + O(n) = O(nlogn)
// Space Complexity: O(n)

var smallerNumbersThanCurrent = function (nums) {
  let smallerNumbers = new Map();
  let sortedNums = [...nums].sort((a, b) => b - a);

  for (let i = 0; i < sortedNums.length; i++) {
    if (smallerNumbers.has(sortedNums[i]))
      smallerNumbers.set(sortedNums[i], smallerNumbers.get(sortedNums[i]) - 1);
    else smallerNumbers.set(sortedNums[i], sortedNums.length - (1 + i));
  }

  return nums.map((a) => smallerNumbers.get(a));
};

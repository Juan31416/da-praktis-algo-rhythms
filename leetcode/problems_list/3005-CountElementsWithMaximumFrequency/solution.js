/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 4 - Using Set
// Time Complexity: O(n)
// Space Complexity: O(n)

var maxFrequencyElements = function (nums) {
  let mappedNums = new Set(nums);
  let totalFreq = 0;
  let maxFreq = 0;

  for (const num of mappedNums) {
    let freq = nums.filter((el) => el === num).length;
    maxFreq = Math.max(maxFreq, freq);
  }

  for (const num of mappedNums) {
    let freq = nums.filter((el) => el === num).length;
    totalFreq += freq === maxFreq ? maxFreq : 0;
  }

  return totalFreq;
};

// Solution 3 - Using Array
// Time Complexity: O(n)
// Space Complexity: O(n)

var maxFrequencyElements = function (nums) {
  let mappedNums = new Array(100001).fill(0);
  let totalFreq = 0;
  let maxFreq = 0;

  for (let i = 0; i < nums.length; i++) {
    mappedNums[nums[i]]++;
  }

  maxFreq = Math.max(...mappedNums);

  for (const value of mappedNums) {
    totalFreq += value === maxFreq ? maxFreq : 0;
  }

  return totalFreq;
};

// Solution 2 - Using Object
// Time Complexity: O(n)
// Space Complexity: O(n)

var maxFrequencyElements = function (nums) {
  let mappedNums = {};
  let totalFreq = 0;
  let maxFreq = 0;

  for (let i = 0; i < nums.length; i++) {
    mappedNums[nums[i]] = (mappedNums[nums[i]] || 0) + 1;
  }

  maxFreq = Math.max(...Object.values(mappedNums));

  for (const value of Object.values(mappedNums)) {
    totalFreq += value === maxFreq ? maxFreq : 0;
  }

  return totalFreq;
};

// Solution 1 - Using Map
// Time Complexity: O(n)
// Space Complexity: O(n)

var maxFrequencyElements = function (nums) {
  let mappedNums = new Map();
  let totalFreq = 0;
  let maxFreq = 0;

  for (let i = 0; i < nums.length; i++) {
    mappedNums.set(nums[i], (mappedNums.get(nums[i]) || 0) + 1);
  }

  maxFreq = Math.max(...mappedNums.values());

  for (const value of mappedNums.values()) {
    totalFreq += value === maxFreq ? maxFreq : 0;
  }

  return totalFreq;
};

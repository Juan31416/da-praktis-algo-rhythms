/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(n)

var frequencySort = function (nums) {
  let freq = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (freq.get(nums[i])) {
      freq.set(nums[i], freq.get(nums[i]) + 1);
    } else {
      freq.set(nums[i], 1);
    }
  }
  return nums.sort((a, b) => freq.get(a) - freq.get(b) || b - a);
};

// Solution 1
// Time Complexity: O(nlogn)
// Space Complexity: O(n)

var frequencySort = function (nums) {
  const numMap = new Map();
  const numGroup = new Map();
  const freqMap = new Map();
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    numGroup.set(nums[i], [...(numGroup.get(nums[i]) || []), nums[i]]);
  }

  for (let i = 0; i < nums.length; i++) {
    numMap.set(nums[i], (numMap.get(nums[i]) || 0) + 1);
  }

  for (const [key, value] of numMap.entries()) {
    freqMap.set(value, [...(freqMap.get(value) || []), key]);
  }

  const newFreqMap = new Map(
    [...freqMap.entries()].sort((a, b) => a[0] - b[0])
  );

  for (const [key, value] of newFreqMap.entries()) {
    if (value.length <= 1) {
      answer.push(...numGroup.get(value[0]));
    } else {
      const sorted = value.sort((a, b) => b - a);
      sorted.forEach((curr) => answer.push(...numGroup.get(curr)));
    }
  }

  return answer;
};

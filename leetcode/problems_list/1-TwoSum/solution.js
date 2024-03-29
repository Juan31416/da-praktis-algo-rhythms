/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * Time Complexity - O(n) - Linear
 * Space Complexity - O(n) - Linear
 */
var twoSum = function (nums, target) {
  let mappedValues = {},
    pairIdx = [];

  nums.forEach((curr, idx) => {
    if (target - curr in mappedValues)
      pairIdx.push(idx, mappedValues[target - curr]);
    mappedValues[curr] = idx;
  });

  return pairIdx;
};

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(n)

var shuffle = function (nums, n) {
  let shuffleArray = [];

  for (let i = 0; i < n; i++) {
    shuffleArray.push(nums[i]);
    shuffleArray.push(nums[i + n]);
  }

  return shuffleArray;
};

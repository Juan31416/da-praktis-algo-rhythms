/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 2 - Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)

var minimumAverage = function (nums) {
  nums.sort((a, b) => a - b);
  let minAvg = [];
  let i = 0;
  let j = nums.length - 1;

  while (i <= nums.length / 2 && j >= nums.length / 2) {
    let tempAvg = (nums[i] + nums[j]) / 2;
    minAvg.push(tempAvg);
    i++;
    j--;
  }

  return Math.min(...minAvg);
};

// Solution 1 - Sort
// Time Complexity: O(nlogn)
// Space Complexity: O(n)

var minimumAverage = function (nums) {
  nums.sort((a, b) => a - b);
  let minAvg = [];

  for (
    let i = 0, j = nums.length - 1;
    i <= nums.length / 2 && j >= nums.length / 2;
    i++, j--
  ) {
    let tempAvg = (nums[i] + nums[j]) / 2;
    minAvg.push(tempAvg);
  }

  return Math.min(...minAvg);
};

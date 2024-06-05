/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution 3 - One for loop to calculate the left and right sums and reverse the right sum
// Time Complexity: O(n)
// Space Complexity: O(n)

var leftRightDifference = function (nums) {
  let leftSum = [0];
  let rightSum = [0];
  let reversedRight = [];

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum.push(leftSum[leftSum.length - 1] + nums[i]);
    rightSum.push(rightSum[rightSum.length - 1] + nums[nums.length - 1 - i]);
  }

  for (let i = rightSum.length - 1; i > -1; i--) {
    reversedRight.push(rightSum[i]);
  }

  return leftSum.map((num, idx) => Math.abs(num - reversedRight[idx]));
};

// Solution 2 - One for loop to calculate the left and right sums
// Time Complexity: O(n)
// Space Complexity: O(n)

var leftRightDifference = function (nums) {
  let leftSum = [0];
  let rightSum = [0];

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum.push(leftSum[leftSum.length - 1] + nums[i]);
    rightSum.push(rightSum[rightSum.length - 1] + nums[nums.length - 1 - i]);
  }
  rightSum = rightSum.reverse();

  return leftSum.map((num, i) => Math.abs(num - rightSum[i]));
};

// Solution 1 - Two for loops to calculate the left and right sums
// Time Complexity: O(n)
// Space Complexity: O(n)

var leftRightDifference = function (nums) {
  let sum = 0;
  let leftSum = [0];
  let rightSum = [0];
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    leftSum.push(sum);
  }

  sum = 0;

  for (let i = nums.length - 1; i > 0; i--) {
    sum += nums[i];
    rightSum.unshift(sum);
  }

  for (let i = 0; i < rightSum.length; i++) {
    answer.push(Math.abs(leftSum[i] - rightSum[i]));
  }

  return answer;
};

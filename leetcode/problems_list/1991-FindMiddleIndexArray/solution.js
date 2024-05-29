/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 2 - Using Reduce
// Time Complexity: O(n)
// Space Complexity: O(1)

var findMiddleIndex = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }

  return -1;
};

// Solution 1 - Using For Loops
// Time Complexity: O(n)
// Space Complexity: O(n)

var findMiddleIndex = function (nums) {
  let tempSum = 0;
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < nums.length; i++) {
    leftArr.push(tempSum);
    tempSum += nums[i];
  }

  tempSum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    rightArr.unshift(tempSum);
    tempSum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftArr[i] === rightArr[i]) return i;
  }

  return -1;
};

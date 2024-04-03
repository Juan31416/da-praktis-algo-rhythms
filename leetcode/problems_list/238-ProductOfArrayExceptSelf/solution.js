/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Time complexity: O(n)
// Space complexity: O(1)
var productExceptSelf = function (nums) {
  const res = [];
  let temp = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = temp;
    temp *= nums[i];
  }
  temp = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= temp;
    temp *= nums[i];
  }
  return res;
};

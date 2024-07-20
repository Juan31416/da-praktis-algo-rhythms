/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(1)

var sumOfEncryptedInt = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let str = nums[i].toString();
    let len = str.length;
    let one = "1";
    let max = 0;
    for (let j = 0; j < len; j++) {
      max = Math.max(max, parseInt(str[j]));
    }
    sum += parseInt(`${one.repeat(len)}`) * max;
  }
  return sum;
};

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)
var sumOfEncryptedInt = function (nums) {
  let sum = 0;
  let one = "1";
  for (let i = 0; i < nums.length; i++) {
    sum +=
      parseInt(`${one.repeat(nums[i].toString().split("").length)}`) *
      Math.max(...nums[i].toString().split("").map(Number));
  }
  return sum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 2 - Using counting sort
// Time complexity: O(n)
// Space complexity: O(n)

var arrayPairSum = function (nums) {
  const min = -10000;
  const max = 10000;
  const count = new Array(max - min + 1).fill(0);
  for (let num of nums) {
    count[num - min]++;
  }
  let arraySum = 0;
  let odd = true;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      if (odd) {
        arraySum += i + min;
      }
      odd = !odd;
      count[i]--;
    }
  }
  return arraySum;
};

// Solution 1 - Using sort method
// Time complexity: O(nlogn)
// Space complexity: O(1)

var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let arraySum = 0;
  for (let i = 1; i < nums.length; i += 2) {
    arraySum += Math.min(nums[i - 1], nums[i]);
  }
  return arraySum;
};

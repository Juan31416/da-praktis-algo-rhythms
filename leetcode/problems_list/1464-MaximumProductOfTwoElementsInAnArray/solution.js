/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 2 - Sort
// Time complexity: O(nlogn)
// Space complexity: O(1)

var maxProduct = function (nums) {
  nums.sort((a, b) => b - a);

  return (nums[0] - 1) * (nums[1] - 1);
};

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)

var maxProduct = function (nums) {
  let largest = 0,
    secondLargest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }

  return (largest - 1) * (secondLargest - 1);
};

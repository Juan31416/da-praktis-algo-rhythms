/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 2
// Time complexity: O(n)
// Space complexity: O(1)

var maxProductDifference = function (nums) {
  let largest = 0;
  let secondLargest = 0;
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallest) {
      secondSmallest = smallest;
      smallest = nums[i];
    } else if (nums[i] < secondSmallest) {
      secondSmallest = nums[i];
    }

    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }

  return largest * secondLargest - smallest * secondSmallest;
};

// Solution 1 - Sort
// Time complexity: O(nlogn)
// Space complexity: O(1)

var maxProductDifference = function (nums) {
  const maxProduct = (numbers) =>
    numbers[0] * numbers[1] -
    numbers[numbers.length - 2] * numbers[numbers.length - 1];
  nums.sort((a, b) => b - a);

  return maxProduct(nums);
};

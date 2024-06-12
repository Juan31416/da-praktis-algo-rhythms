/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Solution 3 - Dutch National Flag Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1)

var sortColors = function (nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  const swapValue = (a, b) => ([nums[b], nums[a]] = [nums[a], nums[b]]);

  while (mid <= high) {
    if (nums[mid] === 0) {
      swapValue(low, mid);
      mid++;
      low++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      swapValue(mid, high);
      high--;
    }
  }
};

// Solution 2 - Same but with while loop
// Time Complexity: O(n)
// Space Complexity: O(1)

var sortColors = function (nums) {
  let rgb = [0, 0, 0]; // Red, Green, Blue
  let counter = 0;
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) rgb[0]++;
    if (nums[i] === 1) rgb[1]++;
    if (nums[i] === 2) rgb[2]++;
  }

  while (counter < 3 && index < nums.length) {
    counter =
      rgb[counter] === 0
        ? rgb[counter + 1] === 0
          ? counter + 2
          : counter + 1
        : counter;

    nums[index] = counter;
    rgb[counter]--;
    index++;
  }
};

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)

var sortColors = function (nums) {
  let rgb = [0, 0, 0]; // Red, Green, Blue
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) rgb[0]++;
    if (nums[i] === 1) rgb[1]++;
    if (nums[i] === 2) rgb[2]++;
  }

  for (let i = 0; i < nums.length; i++) {
    counter =
      rgb[counter] === 0
        ? rgb[counter + 1] === 0
          ? counter + 2
          : counter + 1
        : counter;

    nums[i] = counter;
    rgb[counter]--;
  }
};

/**
 * @param {number[][]} nums
 * @return {number}
 */
// Solution 2: Using Array
// Time Complexity: O(n*m)
// Space Complexity: O(n)

var numberOfPoints = function (nums) {
  let rangeArray = new Array(100001).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums[i][0]; j <= nums[i][1]; j++) {
      rangeArray[j]++;
    }
  }

  return rangeArray.reduce((acc, curr) => (curr > 0 ? acc + 1 : acc), 0);
};

// Solution 1: Using Set
// Time Complexity: O(n*m)
// Space Complexity: O(n)

var numberOfPoints = function (nums) {
  let rangeSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums[i][0]; j <= nums[i][1]; j++) {
      rangeSet.add(j);
    }
  }

  return rangeSet.size;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution 2 - Map
// Time Complexity - O(n)
// Space Complexity - O(n)

var numberOfPairs = function (nums) {
  let map = new Map();
  let pairs = 0;
  let single = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      pairs++;
      map.delete(nums[i]);
    } else {
      map.set(nums[i], 1);
    }
  }

  return [pairs, map.size];
};

// Solution 1 - For loop
// Time Complexity - O(n)
// Space Complexity - O(n)
var numberOfPairs = function (nums) {
  let numsMap = new Map();
  let maxPairs = [0, 0];

  for (let i = 0; i < nums.length; i++) {
    numsMap.set(nums[i], (numsMap.get(nums[i]) || 0) + 1);
  }

  [...numsMap.values()].forEach((curr) => {
    maxPairs[0] += Math.floor(curr / 2);
    maxPairs[1] += curr % 2;
  });

  return maxPairs;
};

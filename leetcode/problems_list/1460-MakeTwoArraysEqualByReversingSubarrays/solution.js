/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */

// Solution 3 - Sort
// Time Complexity: O(n log n)
// Space Complexity: O(1)

var canBeEqual = function (target, arr) {
  return (
    target.sort((a, b) => a - b).toString() ===
    arr.sort((a, b) => a - b).toString()
  );
};

// Solution 2 - Hash Map
// Time Complexity: O(n)
// Space Complexity: O(n)

var canBeEqual = function (target, arr) {
  const map = new Map();

  for (let i = 0; i < target.length; i++) {
    map.set(target[i], (map.get(target[i]) || 0) + 1);
    map.set(arr[i], (map.get(arr[i]) || 0) - 1);
  }

  return [...map.values()].every((val) => val === 0);
};

// Solution 1 - Sort
// Time Complexity: O(n log n)
// Space Complexity: O(1)

var canBeEqual = function (target, arr) {
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);

  return target.every((curr, idx) => curr === arr[idx]);
};

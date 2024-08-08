/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */

// Solution 2 - Map
// Time Complexity: O(n)
// Space Complexity: O(n)

var kthDistinct = function (arr, k) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  let count = 0;
  for (let [key, value] of map) {
    if (value === 1) {
      count++;
    }
    if (count === k) {
      return key;
    }
  }

  return "";
};

// Solution 1 - For, indexOf and lastIndexOf
// Time Complexity: O(n^2)
// Space Complexity: O(n)

var kthDistinct = function (arr, k) {
  let distStr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      distStr.push(arr[i]);
    }
  }

  return distStr.length <= k - 1 ? "" : distStr[k - 1];
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */

// Soltion 2
// Time Complexity: O(n)
// Space Complexity: O(n)

var uniqueOccurrences = function (arr) {
  let mapArr = new Map();
  let setArr = new Set();

  for (let num of arr) {
    mapArr.set(num, (mapArr.get(num) || 0) + 1);
  }

  for (let value of mapArr.values()) {
    if (setArr.has(value)) {
      return false;
    }
    setArr.add(value);
  }

  return true;
};

// Solution 1 - Map and Set
// Time Complexity: O(n)
// Space Complexity: O(n)

var uniqueOccurrences = function (arr) {
  let mapArr = new Map();

  for (let num of arr) {
    mapArr.set(num, (mapArr.get(num) || 0) + 1);
  }

  return [...mapArr.values()].length === new Set([...mapArr.values()]).size;
};

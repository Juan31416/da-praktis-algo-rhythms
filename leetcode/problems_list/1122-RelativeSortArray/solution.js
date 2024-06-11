/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// Solution 2
// Time Complexity: O(nlogn)
// Space Complexity: O(n)

var relativeSortArray = function (arr1, arr2) {
  let mappedArr1 = new Map();
  let notInArr2 = [];
  let result = [];

  for (let curr of arr1) {
    if (!mappedArr1.has(curr)) mappedArr1.set(curr, 0);
    mappedArr1.set(curr, mappedArr1.get(curr) + 1);
  }

  for (let curr of arr2) {
    if (mappedArr1.has(curr)) {
      result = result.concat(Array(mappedArr1.get(curr)).fill(curr));
      mappedArr1.delete(curr);
    }
  }

  for (let [key, value] of mappedArr1) {
    notInArr2 = notInArr2.concat(Array(value).fill(key));
  }

  return result.concat(notInArr2.sort((a, b) => a - b));
};

// Solution 1 - Map, filter, and  Sort
// Time Complexity: O(nlogn)
// Space Complexity: O(n)

var relativeSortArray = function (arr1, arr2) {
  let mappedArr1 = new Map();
  let notInArr2 = arr1
    .filter((curr) => !arr2.includes(curr))
    .sort((a, b) => a - b);

  for (let curr of arr1) {
    if (!mappedArr1.has(curr)) mappedArr1.set(curr, []);
    mappedArr1.set(curr, [...mappedArr1.get(curr), curr]);
  }

  return arr2
    .reduce((acc, curr) => [...acc, ...mappedArr1.get(curr)], [])
    .concat(notInArr2);
};

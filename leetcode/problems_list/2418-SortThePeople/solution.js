/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

// Solution 2 - Using Map
// Time Complexity: O(nlongn)
// Space Complexity: O(n)

var sortPeople = function (names, heights) {
  let map = new Map();
  for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i]);
  }

  let sortedHeights = heights.sort((a, b) => b - a);
  for (let i = 0; i < names.length; i++) {
    sortedHeights[i] = map.get(sortedHeights[i]);
  }

  return sortedHeights;
};

// Solution 1 - Sort
// Time Complexity: O(nlogn)
// Space Complexity: O(n)

var sortPeople = function (names, heights) {
  let sortedHeights = [...heights].sort((a, b) => b - a);
  for (let i = 0; i < names.length; i++) {
    let position = sortedHeights[i];
    sortedHeights[i] = names[heights.indexOf(position)];
  }

  return sortedHeights;
};

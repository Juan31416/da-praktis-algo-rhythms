/**
 * @param {number[][]} grid
 * @return {number[]}
 */
// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(n)
var findMissingAndRepeatedValues = function (grid) {
  let flatGrid = grid.flat();
  let missAndRepeat = [0, 0];

  for (let i = 0; i < flatGrid.length; i++) {
    if (!flatGrid.includes(i + 1)) missAndRepeat[1] = i + 1;
    if (flatGrid.indexOf(flatGrid[i]) !== flatGrid.lastIndexOf(flatGrid[i]))
      missAndRepeat[0] = flatGrid[i];
  }

  return missAndRepeat;
};

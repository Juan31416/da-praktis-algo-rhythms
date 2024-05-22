/**
 * @param {number} columnNumber
 * @return {string}
 */

// Solution 1
// Time Complexity: O(log n)
// Space Complexity: O(1)

var convertToTitle = function (columnNumber) {
  let finalColumn = "";
  while (columnNumber > 0) {
    finalColumn =
      String.fromCharCode(
        columnNumber % 26 == 0
          ? (columnNumber % 26) + 90
          : (columnNumber % 26) + 64
      ) + finalColumn;
    columnNumber =
      (columnNumber - (columnNumber % 26 == 0 ? 26 : columnNumber % 26)) / 26;
  }

  return finalColumn;
};

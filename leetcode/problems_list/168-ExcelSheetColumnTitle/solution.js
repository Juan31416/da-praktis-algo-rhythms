/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let finalColumn = "";

  while (columnNumber > 26) {
    finalColumn = String.fromCharCode(columnNumber % 26) + finalColumn;
  }
};

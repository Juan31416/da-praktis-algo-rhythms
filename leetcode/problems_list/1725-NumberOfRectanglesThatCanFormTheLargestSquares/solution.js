/**
 * @param {number[][]} rectangles
 * @return {number}
 */

// Solution 1 : Reduce
// Time Complexity: O(n)
// Space Complexity: O(1)

var countGoodRectangles = function (rectangles) {
  let largestSquare = rectangles.map((curr) =>
    curr[0] > curr[1] ? curr[1] : curr[0]
  );

  const maxLen = Math.max(...largestSquare);

  return largestSquare.reduce(
    (acc, curr) => (curr === maxLen ? acc + 1 : acc),
    0
  );
};

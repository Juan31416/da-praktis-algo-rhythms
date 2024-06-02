/**
 * @param {number[][]} points
 * @return {number}
 */
// Solution 2 - Set & Spread
// Time complexity: O(n)
// Space complexity: O(n)

var maxWidthOfVerticalArea = function (points) {
  const xSet = new Set(points.map((point) => point[0]));

  const xArr = [...xSet].sort((a, b) => a - b);

  let maxWidth = 0;

  for (let i = 1; i < xArr.length; i++) {
    maxWidth = Math.max(maxWidth, xArr[i] - xArr[i - 1]);
  }

  return maxWidth;
};

// Solution 1 - Sort & Reduce
// Time complexity: O(nlogn)
// Space complexity: O(1)

var maxWidthOfVerticalArea = function (points) {
  points.sort((a, b) => a[0] - b[0]);

  // acc = [last value, maxWidth]
  return points.reduce(
    (acc, curr) =>
      curr[0] - acc[0] > acc[1]
        ? [curr[0], curr[0] - acc[0]]
        : [curr[0], acc[1]],
    [points[0][0], 0]
  )[1];
};

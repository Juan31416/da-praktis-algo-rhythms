/**
 * @param {number[][]} points
 * @return {number}
 */

// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(1)

var minTimeToVisitAllPoints = function (points) {
  let time = 0;

  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i - 1];
    const [x2, y2] = points[i];
    time += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
  }

  return time;
};

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)

var minTimeToVisitAllPoints = function (points) {
  const chebyshevDistance = (a, b) =>
    Math.max(Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1]));
  let time = 0;

  for (let i = 1; i < points.length; i++) {
    time += chebyshevDistance(points[i - 1], points[i]);
  }

  return time;
};

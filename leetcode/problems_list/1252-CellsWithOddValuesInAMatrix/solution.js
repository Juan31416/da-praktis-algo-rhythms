/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */

// Solution 2 - For Loop
// Time Complexity - O(m * n)
// Space Complexity - O(m * n)

var oddCells = function (m, n, indices) {
  let initialMatrix = Array(m)
    .fill()
    .map(() => Array(n).fill(0));

  for (let i = 0; i < indices.length; i++) {
    let [row, col] = indices[i];
    for (let i = 0; i < m; i++) {
      initialMatrix[i][col] += 1;
    }

    for (let j = 0; j < n; j++) {
      initialMatrix[row][j] += 1;
    }
  }

  return initialMatrix.reduce(
    (acc, curr) => acc + curr.filter((x) => x % 2 !== 0).length,
    0
  );
};

// Solution 1 - While Loop
// Time Complexity - O(m * n)
// Space Complexity - O(m * n)

var oddCells = function (m, n, indices) {
  let initialMatrix = Array(m)
    .fill()
    .map(() => Array(n).fill(0));

  while (indices.length) {
    let [row, col] = indices.pop();
    for (let i = 0; i < m; i++) {
      initialMatrix[i][col] += 1;
    }

    for (let j = 0; j < n; j++) {
      initialMatrix[row][j] += 1;
    }
  }

  return initialMatrix.reduce(
    (acc, curr) => acc + curr.filter((x) => x % 2 !== 0).length,
    0
  );
};

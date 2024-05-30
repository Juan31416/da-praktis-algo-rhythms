/**
 * @param {number[][]} mat
 * @return {number[]}
 */
// Solution 1 - Using a hash map to store the diagonals
// Time complexity: O(n*m)
// Space complexity: O(n+m)

var findDiagonalOrder = function (mat) {
  let mappedDiagonals = new Map();

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      let diagonalGroup = i + j;
      if (!mappedDiagonals.has(diagonalGroup))
        mappedDiagonals.set(diagonalGroup, []);
      if (diagonalGroup % 2 === 0) {
        mappedDiagonals.set(diagonalGroup, [
          mat[i][j],
          ...mappedDiagonals.get(diagonalGroup),
        ]);
      } else {
        mappedDiagonals.set(diagonalGroup, [
          ...mappedDiagonals.get(diagonalGroup),
          mat[i][j],
        ]);
      }
    }
  }

  return [...mappedDiagonals.values()].reduce(
    (acc, curr) => [...acc, ...curr],
    []
  );
};

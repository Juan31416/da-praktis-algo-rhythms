/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
// Solution 2
// Time Complexity: O(n*m)
// Space Complexity: O(n)

var kWeakestRows = function (mat, k) {
  const numSoldiers = [];

  for (let i = 0; i < mat.length; i++) {
    numSoldiers.push([
      i,
      mat[i].reduce((acc, curr) => (curr === 1 ? acc + 1 : acc), 0),
    ]);
  }

  numSoldiers.sort((a, b) => a[1] - b[1]);

  return numSoldiers.slice(0, k).map((curr) => curr[0]);
};

// Solution 1
// Time Complexity: O(n*m + nlogn)
// Space Complexity: O(n)

var kWeakestRows = function (mat, k) {
  const numSoldiers = [];

  for (let i = 0; i < mat.length; i++) {
    numSoldiers.push([
      i,
      mat[i].reduce((acc, curr) => (curr === 1 ? acc + 1 : acc), 0),
    ]);
  }

  const newSortedRows = [...numSoldiers].sort((a, b) => a[1] - b[1]);

  return newSortedRows.slice(0, k).map((curr) => curr[0]);
};

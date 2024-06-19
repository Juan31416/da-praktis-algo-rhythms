/**
 * @param {string[][]} paths
 * @return {string}
 */
// Solution 2 - Single Set
// Time Complexity: O(n)
// Space Complexity: O(1)

var destCity = function (paths) {
  let originsPaths = new Set(paths.map((x) => [...x][0]));
  let finalDestiny = "";

  for (const path of paths) {
    if (!originsPaths.has([...path][1])) finalDestiny = [...path][1];
  }

  return finalDestiny;
};

// Solution 1 - Double Set
// Time Complexity: O(n)
// Space Complexity: O(n)

var destCity = function (paths) {
  let destinationsPaths = new Set(paths.map((x) => [...x][1]));
  let originsPaths = new Set(paths.map((x) => [...x][0]));
  let finalDestiny = "";

  for (const destPath of destinationsPaths) {
    if (!originsPaths.has(destPath)) finalDestiny = destPath;
  }

  return finalDestiny;
};

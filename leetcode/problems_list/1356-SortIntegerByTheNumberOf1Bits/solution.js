/**
 * @param {number[]} arr
 * @return {number[]}
 */

// Solution 2 - Build In Sort
// Time Complexity: O(nlogn)
// Space Complexity: O(n)

var sortByBits = function (arr) {
  return arr.sort((a, b) => {
    let aOnes = a
      .toString(2)
      .split("")
      .filter((bit) => bit === "1").length;
    let bOnes = b
      .toString(2)
      .split("")
      .filter((bit) => bit === "1").length;

    if (aOnes === bOnes) {
      return a - b;
    }

    return aOnes - bOnes;
  });
};

// Solution 1 - Sort
// Time Complexity: O(nlogn)
// Space Complexity: O(n)

var sortByBits = function (arr) {
  let mappedArr = [];
  arr.sort((a, b) => a - b);

  for (let number of arr) {
    let onesCount = [...number.toString(2)].filter(
      (curr) => curr === "1"
    ).length;
    mappedArr.push([number, onesCount]);
  }

  return mappedArr.sort((a, b) => a[1] - b[1]).map((curr) => curr[0]);
};

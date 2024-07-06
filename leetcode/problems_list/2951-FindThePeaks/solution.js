/**
 * @param {number[]} mountain
 * @return {number[]}
 */
// Solution 3
// Time complexity: O(n)
// Space complexity: O(1)

var findPeaks = function (mountain) {
  let peaks = [];
  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
      peaks.push(i);
      i++;
    }
  }

  return peaks;
};

// Solution 2
// Time complexity: O(n)
// Space complexity: O(1)

var findPeaks = function (mountain) {
  let peaks = [];
  let i = 1;
  while (i < mountain.length - 1) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
      peaks.push(i);
      i += 2;
    } else {
      i++;
    }
  }

  return peaks;
};

// Solution 1
// Time complexity: O(n)
// Space complexity: O(1)
var findPeaks = function (mountain) {
  let peaks = [];
  for (let i = 2; i < mountain.length; i++) {
    if (mountain[i - 1] > mountain[i] && mountain[i - 1] > mountain[i - 2])
      peaks.push(i - 1);
  }

  return peaks;
};

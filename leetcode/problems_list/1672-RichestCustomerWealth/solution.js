/**
 * @param {number[][]} accounts
 * @return {number}
 */

// Solution 2 - Single for loop
// Time complexity: O(n^2)
// Space complexity: O(1)

var maximumWealth = function (accounts) {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let tempWealth = accounts[i].reduce((acc, curr) => acc + curr, 0);
    maxWealth = maxWealth > tempWealth ? maxWealth : tempWealth;
  }

  return maxWealth;
};

// Solution 1 - Double for loop
// Time complexity: O(n^2)
// Space complexity: O(1)

var maximumWealth = function (accounts) {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let tempWealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      tempWealth += accounts[i][j];
    }
    maxWealth = maxWealth > tempWealth ? maxWealth : tempWealth;
  }

  return maxWealth;
};

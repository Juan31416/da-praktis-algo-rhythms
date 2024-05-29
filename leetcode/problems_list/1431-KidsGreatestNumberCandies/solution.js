/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

// Solution 4 - Using Reduce
// Time Complexity: O(n)
// Space Complexity: O(n)

var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.reduce((acc, cur) => {
    acc.push(cur + extraCandies >= max);
    return acc;
  }, []);
};

// Solution 3 - Using Max and Map
// Time Complexity: O(n)
// Space Complexity: O(n)

var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= max);
};

// Solution 2 - Using For Loop and Max
// Time Complexity: O(n)
// Space Complexity: O(n)

var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  let kidsList = [];

  for (let i = 0; i < candies.length; i++) {
    kidsList.push(candies[i] + extraCandies >= max ? true : false);
  }

  return kidsList;
};

// Solution 1 - Using For Loop
// Time Complexity: O(n)
// Space Complexity: O(n)

var kidsWithCandies = function (candies, extraCandies) {
  let max = 0;
  let kidsList = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) max = candies[i];
  }

  for (let i = 0; i < candies.length; i++) {
    kidsList.push(candies[i] + extraCandies >= max ? true : false);
  }

  return kidsList;
};

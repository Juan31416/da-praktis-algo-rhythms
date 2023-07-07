/**
 * Tournament Winner
 * Input: two non-empty arrays
 * Output: string representing the team that won the tournament
 * Assumptions: there will always be a winner
 */

function tournamentWinner(competitions, results) {
  // O(n) time | O(k) space

  const scoreTable = {};
  const topTeam = { team: "", score: 0 };

  competitions.forEach((curr, idx) => {
    let currWinner = competitions[idx][results[idx ^ 1]];

    scoreTable[currWinner] = scoreTable[currWinner] + 3 || 3;
    if (scoreTable[currWinner] > topTeam.score) {
      topTeam.team = currWinner;
      topTeam.score = scoreTable[currWinner];
    }
  });
  return topTeam.team;
}

exports.tournamentWinner = tournamentWinner;

/**
 * Solution 1
 * Map approach
 * Time: O(n)
 * Space: O(k)
 * Iterate through the competitions array and for each competition, check the result
 * If the result is 0, add 3 points to the away team
 * If the result is 1, add 3 points to the home team
 * If the score of the current team is greater than the score of the top team, update the top team
 * Return the top team
 * Edge cases: empty array, array with one element, array with two elements
 * Assumptions: there will always be a winner
 * Test cases:
 * [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]], [0, 0, 1] => "Python"
 * [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]], [0, 1, 1] => "C#"
 * [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]], [1, 1, 1] => "HTML"
 * [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]], [0, 0, 0] => "C#"
 * */

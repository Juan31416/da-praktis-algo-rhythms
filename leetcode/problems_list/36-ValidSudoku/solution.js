/**
 * @param {character[][]} board
 * @return {boolean}
 */
// Time Complexity: O(1) since the board is always a 9x9 board
// Space Complexity: O(1) since the board is always a 9x9 board

let isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set();
    let col = new Set();
    let box = new Set();
    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      if (row.has(_row) || col.has(_col) || box.has(_box)) return false;
      if (_row !== ".") row.add(_row);
      if (_col !== ".") col.add(_col);
      if (_box !== ".") box.add(_box);
    }
  }
  return true;
};

/**
 * Solution 1
 * @param {character[][]} board
 * @return {boolean}
 * 
 *  
var isValidSudoku = function (board) {
  let sdkuCheck = {};

  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      let curr = board[x][y];
      sdkuCheck[curr] = sdkuCheck[curr] ? (sdkuCheck[curr] += 1) : 1;
      if (curr !== "." && sdkuCheck[curr] > 1) return false;
    }
    sdkuCheck = {};
  }

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      let curr = board[x][y];
      sdkuCheck[curr] = sdkuCheck[curr] ? (sdkuCheck[curr] += 1) : 1;
      if (curr !== "." && sdkuCheck[curr] > 1) return false;
    }
    sdkuCheck = {};
  }

  for (let xBox = 0; xBox < 7; xBox += 3) {
    for (let yBox = 0; yBox < 7; yBox += 3) {
      if (!checkSudokuBox(board, xBox, yBox)) {
        return false;
      }
    }
  }
  return true;
};

function checkSudokuBox(board, xBox, yBox) {
  const sdkuCheck = {};
  for (let x = xBox; x < xBox + 3; x++) {
    for (let y = yBox; y < yBox + 3; y++) {
      const curr = board[x][y];
      if (curr !== "." && (sdkuCheck[curr] = (sdkuCheck[curr] || 0) + 1) > 1) {
        return false;
      }
    }
  }
  return true;
}
 */

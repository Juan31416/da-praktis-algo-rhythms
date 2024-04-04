"""
Problem: 36. Valid Sudoku
Source: https://leetcode.com/problems/valid-sudoku/
"""

# Time Complexity: O(1) because the board is always a 9x9 board
# Space Complexity: O(1) because the board is always a 9x9 board


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for i in range(9):
            row = set()
            col = set()
            box = set()
            for j in range(9):
                _row = board[i][j]
                _col = board[j][i]
                _box = board[3*(i//3)+(j//3)][3*(i % 3)+(j % 3)]
                if (_row in row or _col in col or _box in box):
                    return False
                if (_row != '.'):
                    row.add(_row)
                if (_col != '.'):
                    col.add(_col)
                if (_box != '.'):
                    box.add(_box)
        return True

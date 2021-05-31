package 递归与回溯;
/*
 * @lc app=leetcode.cn id=200 lang=java
 *
 * [200] 岛屿数量
 */

// @lc code=start
class Solution {
  public void dfs(char[][] grid, int row, int col) {
    if (col < 0 || row < 0 || row >= grid.length || col >= grid[0].length)
      return;
    if (grid[row][col] != '1')
      return;
    grid[row][col] = '0';
    dfs(grid, row + 1, col);
    dfs(grid, row, col + 1);
    dfs(grid, row - 1, col);
    dfs(grid, row, col - 1);
  }

  public int numIslands(char[][] grid) {
    if (grid.length == 0) {
      return 0;
    }
    int rows = grid.length;
    int cols = grid[0].length;
    int count = 0;
    for (int m = 0; m < rows; m++) {
      for (int n = 0; n < cols; n++) {
        if (grid[m][n] == '1') {
          count++;
          dfs(grid, m, n);
        }
      }
    }
    return count;
  }
}
// @lc code=end

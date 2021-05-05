/*
 * @lc app=leetcode.cn id=1219 lang=javascript
 *
 * [1219] 黄金矿工
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  const rows = grid.length // y
  if (!rows) return 0
  const cols = grid[0].length // x
  const visited = new Array(rows)
    .fill(null)
    .map((i) => new Array(cols).fill(false))
  const directives = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1]
  ]
  let maxGold = 0
  const check = (x, y, sum) => {
    visited[y][x] = true
    for (const dir of directives) {
      const nextX = x + dir[0]
      const nextY = y + dir[1]
      if (
        nextX >= 0 &&
        nextY >= 0 &&
        nextX < cols &&
        nextY < rows &&
        !visited[nextY][nextX] &&
        grid[nextY][nextX] !== 0
      ) {
        check(nextX, nextY, sum + grid[nextY][nextX])
      } else {
        maxGold = Math.max(maxGold, sum)
      }
    }
    visited[y][x] = false
  }
  for (let m = 0; m < rows; m++) {
    for (let n = 0; n < cols; n++) {
      if (grid[m][n] !== 0) {
        check(n, m, grid[m][n])
      }
    }
  }
  return maxGold
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = Array(n).fill(0)
  dp[0] = grid[0][0]
  for (let i = 1; i < n; i++) {
    dp[i] = dp[i - 1] + grid[0][i]
  }
  console.log(dp)
  for (let i = 1; i < m; i++) {
    dp[0] = dp[0] + grid[i][0]
    for (let j = 1; j < n; j++) {
      dp[j] = Math.min(dp[j] + grid[i][j], dp[j - 1] + grid[i][j])
    }
    console.log(dp)
  }
  return dp[n - 1]
}
console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])
)
// @lc code=end

/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length
  if (n === 1) return matrix[0][0]
  const dp = Array(n)
    .fill(null)
    .map(() => Array(n).fill(null))
  matrix[0].forEach((val, idx) => {
    dp[0][idx] = val
  })
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.min(
      dp[i - 1][0] + matrix[i][0],
      dp[i - 1][1] + matrix[i][0]
    )
    for (let j = 1; j < n - 1; j++) {
      const cur = matrix[i][j]
      dp[i][j] = Math.min(
        dp[i - 1][j - 1] + cur,
        dp[i - 1][j + 1] + cur,
        dp[i - 1][j] + cur
      )
    }
    dp[i][n - 1] = Math.min(
      dp[i - 1][n - 2] + matrix[i][n - 1],
      dp[i - 1][n - 1] + matrix[i][n - 1]
    )
  }
  return Math.min(...dp[n-1])
}
// @lc code=end

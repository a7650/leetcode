/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let maxSide = 0
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
    return maxSide
  }
  let rows = matrix.length,
    columns = matrix[0].length
  const dp = Array(rows)
    .fill(null)
    .map(() => Array(columns).fill(0))
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] == '1') {
        if (i == 0 || j == 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] =
            Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1
        }
        maxSide = Math.max(maxSide, dp[i][j])
      }
    }
  }
  let maxSquare = maxSide * maxSide
  return maxSquare
}
// @lc code=end

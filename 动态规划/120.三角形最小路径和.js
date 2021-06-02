/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const n = triangle.length
  const dp = Array(n)
  dp[0] = triangle[0][0]
  for (let i = 1; i < n; i++) {
    dp[i] = dp[i - 1] + triangle[i][i]
    for (let j = i - 1; j > 0; j--) {
      const cur = triangle[i][j]
      dp[j] = Math.min(dp[j - 1] + cur, dp[j] + cur)
    }
    dp[0] = dp[0] + triangle[i][0]
  }
  return Math.min(...dp)
}

// @lc code=end

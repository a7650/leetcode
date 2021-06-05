/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function (n) {
  const dp = Array(n + 1).fill(Infinity)
  dp[0] = 0
  const maxSquareIndex = Math.sqrt(n) + 1
  const squareArr = []
  for (let i = 1; i < maxSquareIndex; i++) {
    squareArr[i] = i * i
  }
  for (let i = 1; i <= n; i++) {
    const maxJ = Math.sqrt(i)
    for (let j = 1; j <= maxJ; j++) {
      dp[i] = Math.min(dp[i], dp[i - squareArr[j]] + 1)
    }
  }
  return dp[n]
}
// @lc code=end

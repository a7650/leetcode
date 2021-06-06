/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length
  const n = text2.length
  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0))
  for (let j = 1; j <= m; j++) {
    for (let k = 1; k <= n; k++) {
      const str1 = text1[j - 1]
      const str2 = text2[k - 1]
      if (str1 === str2) {
        dp[j][k] = dp[j - 1][k - 1] + 1
      } else {
        dp[j][k] = Math.max(dp[j - 1][k], dp[j][k - 1])
      }
    }
  }
  return dp[m][n]
}
console.log(longestCommonSubsequence('abcde', 'ace'))
// @lc code=end

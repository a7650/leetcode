/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const n = s.length
  const dp = Array(n)
    .fill(null)
    .map(() => Array(n).fill(false))
  let ret = 0
  for (let i = 0; i < n; i++) {
    dp[i][i] = true
    ret++
  }
  for (let i = 0; i < n; i++) {
    if ((dp[i][i + 1] = s[i] === s[i + 1])) {
      ret++
    }
    for (let j = i + 2; j < n; j++) {
      dp[i][j] = dp[i - 1][j + 1] && s[i] === s[j]
      if (dp[i][j]) {
        ret++
      }
    }
  }
  return ret
}
// @lc code=end

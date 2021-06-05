/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const len = strs.length
  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0))
  const getCount = (str) => {
    return [str.replace(/1/g, '').length, str.replace(/0/g, '').length]
  }
  let res = -Infinity
  for (let i = 1; i <= len; i++) {
    const [w0, w1] = getCount(strs[i - 1])
    for (let j = m; j >= 0; j--) {
      for (let k = n; k >= 0; k--) {
        if (j >= w0 && k >= w1) {
          dp[j][k] = Math.max(dp[j][k], dp[j - w0][k - w1] + 1)
          if (dp[j][k] > res) {
            res = dp[j][k]
          }
        }
      }
    }
  }
  return res < 0 ? 0 : res
}
// @lc code=end

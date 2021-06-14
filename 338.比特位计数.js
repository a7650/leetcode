/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  if (n == 0) return [0]
  const dp = Array(n + 1).fill(0)
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i >> 1] + (i & 1)
  }
  return dp
}
console.log(countBits(5))
// @lc code=end

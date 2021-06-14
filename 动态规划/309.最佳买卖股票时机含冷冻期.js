/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length
  const f = Array(3).fill(0)
  f[0] = -prices[0]
  for (let i = 1; i < n; ++i) {
    const [a, b, c] = f
    f[0] = Math.max(a, c - prices[i])
    f[1] = a + prices[i]
    f[2] = Math.max(b, c)
  }
  return Math.max(f[1], f[2])
}
// @lc code=end

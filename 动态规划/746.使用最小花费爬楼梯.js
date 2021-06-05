/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  cost = [0, ...cost, 0]
  const dp = Array(cost.length)
  dp[0] = 0
  dp[1] = cost[1]
  for (let i = 2; i < dp.length; i++) {
    d[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i])
  }
  return dp[cost.length - 1]
}
// @lc code=end

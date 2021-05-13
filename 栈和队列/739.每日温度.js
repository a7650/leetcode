/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const len = temperatures.length
  const ret = Array(len).fill(0)
  const stack = []
  for (let i = len - 1; i >= 0; i--) {
    const cur = temperatures[i]
    while (stack.length > 0 && cur >= temperatures[stack[stack.length - 1]]) {
      stack.pop()
    }
    if (stack.length > 0) {
      ret[i] = stack[stack.length - 1] - i
    }
    stack.push(i)
  }
  return ret
}
// @lc code=end

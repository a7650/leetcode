/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let len = nums.length,
    i = 0,
    j = -1,
    ret = Infinity,
    sum = 0
  while (i < len) {
    if (sum < target) {
      sum += nums[++j]
    } else {
      sum -= nums[i]
      i++
    }
    if (sum >= target) {
      ret = Math.min(ret, j - i + 1)
    }
  }
  return ret === Infinity ? 0 : ret
}
// @lc code=end

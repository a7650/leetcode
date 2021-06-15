/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let n = nums.length
  let max = 0
  for (let i = 0; i < n; i++) {
    if (i > max) return false
    max = Math.max(max, i + nums[i])
    if (max >= n - 1) return true
  }
  return false
}
console.log(canJump([3, 2, 1, 0, 4]))
// @lc code=end

/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i - 1] + nums[i])
  }
  return Math.max(...nums)
}
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// @lc code=end

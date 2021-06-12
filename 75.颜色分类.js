/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let l = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      ;[nums[l], nums[i]] = [nums[i], nums[l]]
      l++
    }
  }
  for (let i = l; i < len; i++) {
    if (nums[i] === 1) {
      ;[nums[l], nums[i]] = [nums[i], nums[l]]
      l++
    }
  }
  return nums
}
console.log(sortColors([2, 0, 2, 1, 1, 0]))
// @lc code=end

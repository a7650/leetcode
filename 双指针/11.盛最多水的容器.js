/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const n = height.length
  let l = 0,
    r = n - 1
  let max = 0
  while (l < r && l < n && r > 0) {
    max = Math.max(Math.min(height[l], height[r]) * (r - l), max)
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return max
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
// @lc code=end

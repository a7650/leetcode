/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length
  const n = matrix[0].length
  let point = [m - 1, 0]
  while (point[0] < m && point[0] > -1 && point[1] < n && point[1] > -1) {
    const val = matrix[point[0]][point[1]]
    if (val === target) {
      return true
    } else if (val > target) {
      point[0] -= 1
    } else {
      point[1] += 1
    }
  }
  return false
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const n = nums.length
  if (!n) return -1
  let l = 0,
    r = n - 1
  while (l <= r) {
    if (l === r) {
      return nums[l] === target ? l : -1
    }
    // if (nums[l] === target) return l
    // if (nums[r] === target) return r
    const mid = (l + r) >> 1
    if (nums[mid] === target) return mid
    if (nums[0] < nums[mid]) {
      if (nums[0] < target && target < nums[mid]) {
        // l = l + 1
        r = mid - 1
      } else {
        l = mid + 1
        // r = r - 1
      }
    } else {
      if (nums[mid] < target && target < nums[n - 1]) {
        l = mid + 1
        // r = r - 1
      } else {
        // l = l + 1
        r = mid - 1
      }
    }
  }
  return -1
}
console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
// @lc code=end

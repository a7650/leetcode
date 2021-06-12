/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

function majorityElementRec(nums, s, e) {
  if (s === e) return nums[s]
  const mid = (s + e) >> 1
  const left = majorityElementRec(nums, s, mid)
  const right = majorityElementRec(nums, mid + 1, e)
  if (left === right) return left
  const lCount = rangeCount(nums, left, s, mid)
  const rCount = rangeCount(nums, right, mid + 1, e)
  return lCount > rCount ? left : right
}

function rangeCount(nums, num, s, e) {
  let count = 0
  for (let i = s; i <= e; i++) {
    if (nums[i] === num) {
      count++
    }
  }
  return count
}
var majorityElement = function (nums) {
  return majorityElementRec(nums, 0, nums.length - 1)
}

// @lc code=end

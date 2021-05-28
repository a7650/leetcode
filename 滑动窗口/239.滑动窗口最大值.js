/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const ret = []
  const stack = []
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      stack.pop()
    }
    stack.push(nums[i])
    if (i + 1 > k && stack[0] === nums[i - k]) {
      stack.shift()
    }
    if (i + 1 >= k) {
      ret.push(stack[0])
    }
  }
  return ret
}
// @lc code=end

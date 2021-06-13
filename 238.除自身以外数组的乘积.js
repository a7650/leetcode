/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length
  const answer = Array(n)
  answer[0] = 1
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i]
  }
  let p = 1
  for (let i = n - 1; i >= 0; i--) {
    answer[i] = answer[i] * p
    p *= nums[i]
  }
  return answer
}
// @lc code=end

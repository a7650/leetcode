/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const dp = Array(nums2.length + 1).fill(0)
  let max = 0
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = nums2.length; j >= 0; j--) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[j] = dp[j - 1] + 1
      } else {
        dp[j] = 0
      }
      if (dp[j] > max) {
        max = dp[j]
      }
    }
  }
  return max
}
console.log(findLength([0, 1, 1, 1, 1], [1, 0, 1, 0, 1]))
// @lc code=end

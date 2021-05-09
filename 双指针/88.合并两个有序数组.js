/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let j = m - 1,
    k = n - 1,
    i = m + n - 1
  while (j >= 0 && k >= 0) {
    if (nums1[j] >= nums2[k]) {
      nums1[i] = nums1[j]
      j--
      i--
    } else {
      nums1[i] = nums2[k]
      k--
      i--
    }
  }
  while (k >= 0) {
    nums1[i] = nums2[k]
    k--
    i--
  }
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1)
  }
  const result = []
  const nums1Map = nums1.reduce((result, cur) => {
    result[cur] = (result[cur] || 0) + 1
    return result
  }, {})
  for (const val of nums2) {
    if (nums1Map[val]) {
      result.push(val)
      nums1Map[val] -= 1
    }
  }
  return result
}
// @lc code=end

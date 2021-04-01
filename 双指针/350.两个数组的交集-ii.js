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
  nums1 = [...nums1].sort((a, b) => a - b)
  nums2 = [...nums2].sort((a, b) => a - b)
  const len1 = nums1.length
  const len2 = nums2.length
  let cursor1 = 0
  let cursor2 = 0
  const result = []
  while (cursor1 < len1 && cursor2 < len2) {
    const val1 = nums1[cursor1]
    const val2 = nums2[cursor2]
    if (val1 < val2) {
      cursor1++
    } else if (val1 > val2) {
      cursor2++
    } else {
      result.push(val1)
      cursor1++
      cursor2++
    }
  }
  return result
}
// @lc code=end

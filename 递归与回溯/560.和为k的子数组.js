/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map()
  map.set(0, 1)
  let count = 0,
    pre = 0
  for (const val of nums) {
    pre += val
    if (map.get(pre - k)) {
      count += map.get(pre - k)
    }
    map.set(pre, (map.get(pre) || 0) + 1)
  }
  return count
}
// var subarraySum = function (nums, k) {
//   let count = 0
//   for (let i = 0; i < nums.length; i++) {
//     let val = 0
//     for (let m = i; m >= 0; m--) {
//       val += nums[m]
//       if (val === k) {
//         count++
//       }
//     }
//   }
//   return count
// }
// @lc code=end

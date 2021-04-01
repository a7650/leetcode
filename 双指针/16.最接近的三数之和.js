/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  const len = nums.length
  if (len <= 3) {
    return nums.reduce((result, cur) => result + cur, 0)
  }
  nums = [...nums].sort((a, b) => a - b)
  let diff = Infinity,
    result
  for (let i = 0, end = len - 2; i < end; i++) {
    const basic = nums[i]

    let left = i + 1
    let right = len - 1

    while (left < right) {
      const r = basic + nums[left] + nums[right]
      const d = Math.abs(target - r)
      // console.log(r, d)
      if (d < diff) {
        result = r
        diff = d
      }

      if (r > target) {
        right--
      } else if (r < target) {
        left++
      } else {
        return result
      }
    }
  }
  return result
}
threeSumClosest([-1, 2, 1, -4], 1)
// @lc code=end

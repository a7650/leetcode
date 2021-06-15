/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set()
  for (const num of nums) {
    numSet.add(num)
  }
  let ret = 0
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let n = 1
      let curNum = num
      while (numSet.has(curNum + 1)) {
        n++
        curNum++
      }
      ret = Math.max(ret, n)
    }
  }
  return ret
}

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
// @lc code=end

/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0]
    return a[1] - b[1]
  })
  const ans = []
  people.forEach((item) => {
    if (ans.length === item[1]) {
      ans.push(item)
    } else {
      ans.splice(item[1], 0, item)
    }
  })
  return ans
}
// @lc code=end

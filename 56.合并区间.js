/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let i = 1
  while (i < intervals.length) {
    const cur = intervals[i]
    const lst = intervals[i - 1]
    if (cur[0] <= lst[1]) {
      intervals.splice(i, 1)
      intervals[i - 1][1] = Math.max(cur[1], lst[1])
    } else {
      i++
    }
  }
  return intervals
}
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ])
)
// @lc code=end

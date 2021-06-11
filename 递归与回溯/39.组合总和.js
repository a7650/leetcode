/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ret = []
  const len = candidates.length
  const dfs = (target, combine, idx) => {
    if (target < 0) return
    if (target === 0) {
      ret.push([...combine])
    }
    for (let i = idx; i < len; i++) {
      combine.push(candidates[i])
      dfs(target - candidates[i], combine, i)
      combine.pop()
    }
  }
  dfs(target, [], 0)
  return ret
}
console.log(combinationSum([2, 3, 6, 7], 7))
// @lc code=end

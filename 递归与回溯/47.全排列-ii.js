/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ans = []
  const vis = new Array(nums.length).fill(false)
  const backtrack = (idx, perm) => {
    if (idx === nums.length) {
      ans.push(perm.slice())
      return
    }
    for (let i = 0; i < nums.length; ++i) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
        continue
      }
      perm.push(nums[i])
      vis[i] = true
      backtrack(idx + 1, perm)
      vis[i] = false
      perm.pop()
    }
  }
  nums.sort((x, y) => x - y)
  backtrack(0, [])
  return ans
}
// var permuteUnique = function (nums) {
//   const symbol = '&'
//   const len = nums.length
//   const ret = new Set()
//   const dfs = (curNums, result) => {
//     if (result.length === len) {
//       ret.add(result.join(symbol))
//       return
//     }
//     for (let i = 0; i < curNums.length; i++) {
//       result.push(curNums[i])
//       dfs(curNums.slice(0, i).concat(curNums.slice(i + 1)), result)
//       result.pop()
//     }
//   }
//   dfs(nums, [])
//   return Array.from(ret).map((i) => i.split(symbol))
// }
// permuteUnique([-1, 2, -1, 2, 1, -1, 2, 1])
// @lc code=end

/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const len = nums.length
  const ret = []
  const dfs = (curNums, result) => {
    if (result.length === len) {
      ret.push([...result])
      return
    }
    for (let i = 0; i < curNums.length; i++) {
      result.push(curNums[i])
      dfs(curNums.slice(0, i).concat(curNums.slice(i + 1)), result)
      result.pop()
    }
  }
  dfs(nums, [])
  return ret
}

console.log(permute([1, 2, 3]))
// @lc code=end

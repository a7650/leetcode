/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const ret = []
  const stack = []
  const nums = Array(n)
    .fill(null)
    .map((_, idx) => idx + 1)
  console.log(nums)
  const len = nums.length

  const dfs = (idx) => {
    if (stack.length === k) {
      ret.push([...stack])
    }
    for (let i = idx; i < len; i++) {
      stack.push(nums[i])
      dfs(++idx)
      stack.pop()
    }
  }

  dfs(0)

  return ret
}
// @lc code=end

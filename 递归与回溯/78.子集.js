/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ret = []
  const stack = []
  const len = nums.length

  const dfs = (idx) => {
    ret.push([...stack])
    for (let i = idx; i < len; i++) {
      stack.push(nums[i])
      dfs(++idx)
      stack.pop()
    }
  }

  dfs(0)

  return ret
}

// console.log(subsets([1, 2, 3]))
// @lc code=end

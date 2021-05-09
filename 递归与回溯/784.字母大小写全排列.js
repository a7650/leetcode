/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  const result = []
  const dfs = (start, ret) => {
    result.push(ret)
    for (let i = start; i < S.length; i++) {
      if (ret[i] >= 'a' && ret[i] <= 'z') {
        dfs(i + 1, ret.slice(0, i) + ret[i].toUpperCase() + ret.slice(i + 1))
      } else if (ret[i] >= 'A' && ret[i] <= 'Z') {
        dfs(i + 1, ret.slice(0, i) + ret[i].toLowerCase() + ret.slice(i + 1))
      }
    }
  }
  dfs(0, S)
  return result
}
// @lc code=end

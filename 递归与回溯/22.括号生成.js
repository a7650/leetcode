/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ret = []
  const gen = (left, right, prev) => {
    if (prev.length === n * 2) {
      ret.push(prev)
      return
    }
    if (left < n) {
      gen(left + 1, right, prev + '(')
    }
    if (right < left) {
      gen(left, right + 1, prev + ')')
    }
  }
  gen(0, 0, '')
  return ret 
}

// @lc code=end

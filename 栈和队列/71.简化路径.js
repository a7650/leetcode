/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const tokens = path.split('/')
  const stack = []
  for (const token of tokens) {
    if (token === '..') {
      if (stack.length > 0) {
        stack.pop()
      }
    } else if (token !== '' && token !== '.') {
      stack.push(token)
    }
  }
  const ret = stack.join('/')
  return '/' + ret
}
// @lc code=end

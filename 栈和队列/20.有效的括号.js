/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const rst = []
  const flag = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  const reverseFlag = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  for (const i of s) {
    if (flag[i]) {
      rst.push(i)
    } else if (reverseFlag[i] !== rst.pop()) {
      return false
    }
  }
  return rst.length === 0
}
// @lc code=end

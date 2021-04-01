/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = function (S) {
  const stack = []
  for (const cur of S) {
    if (stack[stack.length - 1] === cur) {
      stack.pop()
    } else {
      stack.push(cur)
    }
  }
  return stack.join('')
}
// @lc code=end

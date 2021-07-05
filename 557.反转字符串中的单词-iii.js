/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let ret = ''
  let i = 0
  while (i < s.length) {
    if (s[i] === ' ') {
      ret += ' '
      i++
    } else {
      let tmp = ''
      while (i < s.length && s[i] !== ' ') {
        tmp = s[i] + tmp
        i++
      }
      ret += tmp
    }
  }
  return ret
}

console.log(reverseWords("Let's take LeetCode contest"))
// @lc code=end

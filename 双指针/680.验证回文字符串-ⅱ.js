/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  s = s.toLowerCase()
  let left = 0,
    right = s.length - 1

  while (left < right) {
    if (s[left] === s[right]) {
      left++
      right--
    } else {
      let flagA = true,
        flagB = true
      for (let m = left + 1, n = right; m < n; m++, n--) {
        if (s[m] !== s[n]) {
          flagA = false
          break
        }
      }
      for (let m = left, n = right - 1; m < n; m++, n--) {
        if (s[m] !== s[n]) {
          flagB = false
          break
        }
      }
      return flagA || flagB
    }
  }
  return true
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isSalnum = (ch) => {
  return (
    (ch >= 'A' && ch <= 'Z') ||
    (ch >= 'a' && ch <= 'z') ||
    (ch >= '0' && ch <= '9')
  )
}

var isPalindrome = function (s) {
  s = s.toLowerCase()
  let left = 0,
    right = s.length - 1
  while (left < right) {
    while (left < right && !isSalnum(s[left])) {
      left++
    }
    while (left < right && !isSalnum(s[right])) {
      right--
    }
    if (s[left] === s[right]) {
      left++
      right--
    } else {
      return false
    }
  }
  return true

}
// @lc code=end

/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length
  if (len === 1) return s
  const dp = Array(len)
    .fill(null)
    .map(() => Array(len).fill(false))
  let max = 1
  let ret = s[0]
  for (let i = 0; i < len; i++) {
    dp[i][i] = true
  }
  for (let i = len - 1; i >= 0; i--) {
    for (j = i + 1; j < len; j++) {
      if (s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1])) {
        dp[i][j] = true
        if (j - i + 1 > max) {
          max = j - i + 1
          ret = s.slice(i, j + 1)
        }
      }
    }
  }
  return ret
}

console.log(longestPalindrome('aaaa'))
// @lc code=end

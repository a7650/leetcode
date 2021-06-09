/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 哈希表、双指针、滑动窗口
 */
const lengthOfLongestSubstring = function (s) {
  const occ = new Set()
  const n = s.length
  let rk = -1
  let ret = 0
  for (let i = 0; i < n; i++) {
    if (i !== 0) {
      occ.delete(s[i - 1])
    }
    while (rk < n - 1 && !occ.has(s[rk + 1])) {
      occ.add(s[++rk])
    }
    // console.log(occ.size, occ)
    ret = Math.max(ret, occ.size)
  }
  return ret
}
console.log(lengthOfLongestSubstring('pwwkew'))
// @lc code=end

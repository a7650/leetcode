/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
  if (!s || s.length > 12) return []
  const ret = []
  const dfs = (tmpAns, start) => {
    if (start === s.length) {
      if (tmpAns.length === 4) {
        ret.push(tmpAns.join('.'))
      }
      return
    }
    for (let len = 1; len < 4; len++) {
      if (start + len - 1 >= s.length) return
      if (len !== 1 && s[start] === '0') return
      const str = s.substring(start, start + len)
      if (+str > 255) return
      tmpAns.push(str)
      dfs(tmpAns, start + len)
      tmpAns.pop()
    }
  }
  dfs([], 0)
  return ret
}

// @lc code=end

/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  if (s.indexOf('[') < 0) return s
  const len = s.length
  let ret = ''
  let i = 0
  let curCount = ''
  while (i < len) {
    const cur = s[i]
    if (cur >= 0 && cur <= 9) {
      curCount += s[i]
      i++
    } else if (cur === '[') {
      curCount = Number(curCount)
      let next
      let stack = 0
      for (let j = i; j < s.length; j++) {
        if (s[j] === '[') {
          stack += 1
        } else if (s[j] === ']') {
          stack -= 1
          if (stack === 0) {
            next = j
            break
          }
        }
      }
      const str = decodeString(s.slice(i + 1, next))
      ret += Array(curCount).fill(str).join('')
      curCount = ''
      i = next + 1
    } else if (cur === ']') {
      i++
    } else {
      ret += cur
      i++
    }
  }
  return ret
}

console.log(decodeString('abc3[cd]xyz'))
// @lc code=end

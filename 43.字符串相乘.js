/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (a === '0' || b === '0') return 0
  if (a === '1') return b
  if (b === '1') return a
  let len = num2.length
  let ret = '0'
  for (let i = len - 1; i >= 0; i--) {
    let val = helper(num1, num2[i])
    for (i = 0; i < len - 1 - i; i++) {
      val = val + '0'
    }
    
    ret = bigNumberSum(ret, val)
  }
  return ret
}
function helper(a, b) {
  let tmp = 0
  let ret = ''
  for (let i = a.length - 1; i >= 0; i--) {
    let val = a[i] * b + tmp
    ret = (val % 10) + ret
    tmp = Math.floor(val / 10)
  }
  if (tmp > 0) {
    ret = tmp + ret
  }
  return ret
}

function bigNumberSum(a, b) {
  let tmp = 0
  let ap = a.length - 1
  let bp = b.length - 1
  let ret = ''
  while (ap >= 0 || bp >= 0) {
    let val = tmp + (Number(a[ap]) || 0) + (Number(b[bp]) || 0)
    ret = (val % 10) + ret
    tmp = Math.floor(val / 10)
    ap--
    bp--
  }
  if (tmp > 0) {
    ret = tmp + ret
  }
  return ret
}

console.log(bigNumberSum('99999', '1'))
// @lc code=end

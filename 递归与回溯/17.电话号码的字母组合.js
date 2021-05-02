/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return []
  let letterMap = [
    ' ', //0
    '', //1
    'abc', //2
    'def', //3
    'ghi', //4
    'jkl', //5
    'mno', //6
    'pqrs', //7
    'tuv', //8
    'wxyz' //9
  ]
  const queue = letterMap[digits[0]].split('')
  for (let i = 1; i < digits.length; i++) {
    let len = queue.length
    const letter = letterMap[digits[i]]
    while (len > 0) {
      const cur = queue.shift()
      for (const l of letter) {
        queue.push(cur + l)
      }
      len--
    }
  }
  return queue
}
// console.log(letterCombinations('23'))
// var letterCombinations = function (digits) {
//   if (!digits) return []
//   let letterMap = [
//     ' ', //0
//     '', //1
//     'abc', //2
//     'def', //3
//     'ghi', //4
//     'jkl', //5
//     'mno', //6
//     'pqrs', //7
//     'tuv', //8
//     'wxyz' //9
//   ]
//   const ret = []
//   const dfs = (curStr, i) => {
//     if (i >= digits.length) {
//       ret.push(curStr)
//       return
//     }
//     const letter = letterMap[digits[i]]
//     for (const l of letter) {
//       dfs(curStr + l, i + 1)
//     }
//   }
//   dfs('', 0)
//   return ret
// }
// @lc code=end

/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
const codeStrat = {
  '+': (a, b) => a + b,
  '-': (a, b) => b - a,
  '*': (a, b) => a * b,
  '/': (a, b) => b / a
}
var evalRPN = function (tokens) {
  const stack = []
  let cursor = 0
  while (cursor < tokens.length) {
    const token = tokens[cursor]
    const strat = codeStrat[token]
    if (strat && stack.length >= 2) {
      stack.push(parseInt(strat(stack.pop(), stack.pop())))
    } else {
      stack.push(Number(token))
    }
    cursor++
  }
  return stack.shift()
}
// @lc code=end

console.log(evalRPN(["4","3","-"]))

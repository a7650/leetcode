/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const h = board.length,
    w = board[0].length
  const directives = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0]
  ]
  const visitedPos = Array(h)
    .fill(null)
    .map(() => Array(w).fill(false))

  const check = (j, k, s, idx) => {
    if (board[j][k] !== s[idx]) {
      return false
    }
    if (idx === s.length - 1) {
      return true
    }
    let ret = false
    visitedPos[j][k] = true
    for (let i = 0; i < directives.length; i++) {
      const directive = directives[i]
      const newJ = j + directive[0],
        newK = k + directive[1]
      if (
        newJ >= 0 &&
        newJ < h &&
        newK >= 0 &&
        newK < w &&
        !visitedPos[newJ][newK]
      ) {
        if (check(newJ, newK, s, idx + 1)) {
          ret = true
          break
        }
      }
    }
    visitedPos[j][k] = false
    return ret
  }

  for (let j = 0; j < h; j++) {
    for (let k = 0; k < w; k++) {
      const ret = check(j, k, word, 0)
      if (ret) {
        return true
      }
    }
  }
  return false
}

// const test = [
//   ['C', 'A', 'A'],
//   ['A', 'A', 'A'],
//   ['B', 'C', 'D']
// ]
// @lc code=end

/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const max = n * n
  const ret = new Array(n).fill(null).map(() => new Array(n).fill(null))
  let directives = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]
  let curDir = 0

  let curRow = 0,
    curCol = 0

  for (let i = 0; i < max; ++i) {
    ret[curRow][curCol] = i + 1
    const nextRow = curRow + directives[curDir][0]
    const nextCol = curCol + directives[curDir][1]
    if (
      nextRow < 0 ||
      nextCol < 0 ||
      nextRow >= n ||
      nextCol >= n ||
      ret[nextRow][nextCol] !== null
    ) {
      curDir = (curDir + 1) % 4
      curRow = curRow + directives[curDir][0]
      curCol = curCol + directives[curDir][1]
    } else {
      curRow = nextRow
      curCol = nextCol
    }
  }
  return ret
}
// @lc code=end

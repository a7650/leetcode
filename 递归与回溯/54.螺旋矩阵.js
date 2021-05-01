/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return []
  }
  const row = matrix.length,
    col = matrix[0].length
  const total = row * col
  const ret = new Array(total).fill(0)
  const visitedPos = new Array(row)
    .fill(null)
    .map(() => new Array(col).fill(false))
  console.log(visitedPos)

  let directives = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]
  let curDir = 0

  let curRow = 0,
    curCol = 0

  for (let i = 0; i < total; ++i) {
    ret[i] = matrix[curRow][curCol]
    visitedPos[curRow][curCol] = true
    const nextRow = curRow + directives[curDir][0]
    const nextCol = curCol + directives[curDir][1]
    if (
      nextRow < 0 ||
      nextCol < 0 ||
      nextRow >= row ||
      nextCol >= col ||
      visitedPos[nextRow][nextCol]
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

spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])
// @lc code=end

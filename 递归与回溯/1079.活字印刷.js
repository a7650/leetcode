/*
 * @lc app=leetcode.cn id=1079 lang=javascript
 *
 * [1079] 活字印刷
 */

// @lc code=start
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const dfs = (arr) => {
    let res = 0
    for (let i = 0; i < 26; i++) {
      if (arr[i] === 0) continue
      res++
      arr[i]--
      res += dfs(arr)
      arr[i]++
    }
    return res
  }
  const countArr = Array(26).fill(0)
  for (const key of tiles) {
    const pos = key.charCodeAt() - 'A'.charCodeAt()
    countArr[pos] += 1
  }
  return dfs(countArr)
}
// @lc code=end

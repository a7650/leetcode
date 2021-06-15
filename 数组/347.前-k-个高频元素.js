/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const countMap = {}
  for (num of nums) {
    if (countMap[num] == void 0) {
      countMap[num] = 0
    }
    countMap[num]++
  }
  const countArr = Object.entries(countMap)
  const ret = []
  quickSort(countArr, 0, countArr.length - 1, ret, k)
  return ret
}

function quickSort(countArr, start, end, ret, k) {
  const basePoint = countArr[start]
  let idx = start
  for (let i = start; i <= end; i++) {
    if (countArr[i][1] > basePoint[1]) {
      ;[countArr[idx + 1], countArr[i]] = [countArr[i], countArr[idx + 1]]
      idx++
    }
  }
  ;[countArr[idx], countArr[start]] = [countArr[start], countArr[idx]]
  if (k < idx - start + 1) {
    quickSort(countArr, start, idx, ret, k)
  } else {
    for (let i = start; i <= idx; i++) {
      ret.push(countArr[i][0])
    }
    if (k > idx - start + 1) {
      quickSort(countArr, idx + 1, end, ret, k - (idx - start + 1))
    }
  }
}
// @lc code=end

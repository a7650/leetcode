/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  const ans = []
  quickSort(arr, 0, arr.length - 1, ans, k)
  return ans
}

function quickSort(arr, start, end, ans, k) {
  const basePoint = arr[start]
  let idx = start
  for (let i = 1; i <= end; i++) {
    if (arr[i] < basePoint) {
      ;[arr[i], arr[idx]] = [arr[idx], arr[i]]
      idx++
    }
  }
  if (k < basePoint - start + 1) {
    quickSort(arr, start, basePoint - 1, ans, k)
  } else {
    for (let i = start; i <= basePoint; i++) {
      ans.push(arr[i])
    }
    if (k > basePoint - start + 1) {
      quickSort(arr, basePoint + 1, end, ans, k)
    }
  }
}

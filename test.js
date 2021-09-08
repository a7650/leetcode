/**
 * 找到arr中第一个比target大的数的idx
 */
function findLarge(arr, target) {
  let l = 0,
    r = arr.length - 1,
    idx = -1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (arr[mid] < target) {
      idx = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return idx + 1
}

// console.log(find([2, 3, 7, 100, 233], 18))

function findEqual(arr, target) {
  let l = 0,
    r = arr.length - 1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (arr[mid] === target) return mid
    else if (arr[mid] > target) r = mid - 1
    else l = mid + 1
  }
  return -1
}

console.log(findEqual([2, 3, 7, 100, 233], 2))

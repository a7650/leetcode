/*
 * @lc app=leetcode.cn id=480 lang=javascript
 *
 * [480] 滑动窗口中位数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const medianSlidingWindow = function (nums, k) {
  let left = 0 // 左指针
  let right = k // 右指针指向即将加入的右边界元素
  const res = [] // 结果数组
  const calMedianMethod = k % 2 === 0 ? calMedianEven : calMedianOdd // 确认计算中位数的方式
  // 初始化窗口
  const slideWindow = []
  for (let i = left; i < right; i++) {
    slideWindow.push(nums[i])
  }
  slideWindow.sort((a, b) => a - b)
  res.push(calMedianMethod(slideWindow))
  // 移动的过程中动态维护窗口引用
  while (right < nums.length) {
    // 找到左边界元素在窗口内的位置，并删除左边界元素
    const deleteIndex = slideWindow.indexOf(nums[left])
    slideWindow.splice(deleteIndex, 1)
    // 二分搜索得到右边界元素在窗口内位置
    const insertIndex = binarySearch(slideWindow, nums[right])
    slideWindow.splice(insertIndex, 0, nums[right])
    res.push(calMedianMethod(slideWindow))
    right++
    left++
  }
  return res
}

// 二分搜索
function binarySearch(sortedArr, target) {
  // 这里的搜索区间是左闭右开
  let left = 0
  let right = sortedArr.length
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (sortedArr[mid] > target) {
      right = mid
    } else if (sortedArr[mid] <= target) {
      left = mid + 1
    }
  }
  return right
}

// 计算中位数---奇数情况
function calMedianOdd(sortedWindow) {
  const len = sortedWindow.length
  return sortedWindow[Math.floor(len / 2)]
}
// 计算中位数---偶数情况
function calMedianEven(sortedWindow) {
  const len = sortedWindow.length
  return (
    (sortedWindow[Math.floor(len / 2)] +
      sortedWindow[Math.floor(len / 2) - 1]) /
    2
  )
}

// @lc code=end

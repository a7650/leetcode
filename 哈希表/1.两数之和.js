/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashTable = new Map()
  for (let idx = 0; idx < nums.length; idx++) {
    if (hashTable.has(target - nums[idx])) {
      return [idx, hashTable.get(target - nums[idx])]
    } else {
      hashTable.set(nums[idx], Number(idx))
    }
  }
}
// @lc code=end

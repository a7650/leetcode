/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(nums) {
  const sortNums = [...nums].sort((a, b) => a - b);
  console.log('sortNums', sortNums);
  let left, right, len = nums.length;
  for (let i = 0; i < len; i++) {
      if (sortNums[i] !== nums[i] && isNaN(left)) left = i;
      if (sortNums[len - 1 - i] !== nums[len - 1 - i] && isNaN(right)) right = len - 1 - i;
  }
  return right - left + 1 || 0;
}
// @lc code=end

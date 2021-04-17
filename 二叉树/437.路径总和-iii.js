/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 * 前缀和解法
 */
var pathSum = function (root, sum) {
  let ans = 0
  let map = new Map()
  function dfs(presum, node) {
    if (!node) return 0
    map.set(presum, (map.get(presum) || 0) + 1)
    let target = presum + node.val
    ans += map.get(target - sum) || 0
    dfs(target, node.left)
    dfs(target, node.right)
    map.set(presum, map.get(presum) - 1)
  }
  dfs(0, root)
  return ans
}
// @lc code=end

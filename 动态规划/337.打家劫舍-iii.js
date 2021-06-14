/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
 * @return {number}
 */
var rob = function (root) {
  const dfs = (node) => {
    if (!node) return [0, 0]
    const l = dfs(node.left)
    const r = dfs(node.right)
    const selected = node.val + l[1] + r[1]
    const notSelected = Math.max(...l) + Math.max(...r)
    return [selected, notSelected]
  }
  return Math.max(...dfs(root))
}
// @lc code=end

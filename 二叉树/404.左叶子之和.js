/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
  const dfs = (node, isLeft) => {
    if (!node) return 0
    if (!node.left && !node.right && isLeft) return node.val
    return dfs(node.left, true) + dfs(node.right)
  }
  return dfs(root)
}
// @lc code=end

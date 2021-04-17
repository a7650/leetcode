/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let res = false
  const dfs = (node, val) => {
    if (node && !res) {
      const _val = val + node.val
      if (node.left) {
        dfs(node.left, _val)
      }
      if (node.right) {
        dfs(node.right, _val)
      }
      if (!node.left && !node.right && _val === targetSum) {
        res = true
      }
    }
  }
  dfs(root, 0)
  return res
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  return height(root) !== -1
}

function height(node) {
  if (!node) return 0
  const left = height(node.left)
  const right = height(node.right)
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1
  }
  return Math.max(left, right) + 1
}
// @lc code=end

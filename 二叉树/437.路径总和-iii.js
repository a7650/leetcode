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
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0
  return (
    findNode(root, targetSum) +
    pathSum(root.left, targetSum) +
    pathSum(root.right, targetSum)
  )
}
function findNode(node, sum) {
  if (!node) return 0
  return (
    (node.val === sum ? 1 : 0) +
    findNode(node.left, sum - node.val) +
    findNode(node.right, sum - node.val)
  )
}
// @lc code=end

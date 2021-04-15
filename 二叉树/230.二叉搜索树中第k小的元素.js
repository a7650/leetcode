/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  let res = null
  const inOrdertraverse = (node) => {
    if (node && k) {
      inOrdertraverse(node.left)
      if (--k === 0) {
        res = node.val
      }
      inOrdertraverse(node.right)
    }
  }
  inOrdertraverse(root)
  return res
}
// @lc code=end

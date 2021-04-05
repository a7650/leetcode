/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const rst = []
  const track = (node, path) => {
    if (node === null) {
      rst.push(path.join('->'))
      return
    }
    if (node.val !== null) {
      node.left !== null && track(node.left, [...path, node.val])
      node.right !== null && track(node.right, [...path, node.val])
      if (node.left === null && node.right === null) {
        rst.push([...path, node.val].join('->'))
      }
    }
  }
  track(root, [])
  return rst
}
// @lc code=end

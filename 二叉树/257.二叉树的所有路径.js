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
 * 深度优先搜索
 */
// var binaryTreePaths = function (root) {
//   const rst = []
//   const track = (node, path) => {
//     if (node) {
//       path += String(node.val)
//       if (node.left === null && node.right === null) {
//         rst.push(path)
//       } else {
//         path += '->'
//         track(node.left, path)
//         track(node.right, path)
//       }
//     }
//   }
//   track(root, '')
//   return rst
// }

/**
 * @param {TreeNode} root
 * @return {string[]}
 * 广度优先搜索
 */
var binaryTreePaths = function (root) {
  const paths = []
  if (root === null) {
    return paths
  }
  const node_queue = [root]
  const path_queue = [root.val.toString()]

  while (node_queue.length) {
    const node = node_queue.shift()
    const path = path_queue.shift()

    if (node.left === null && node.right === null) {
      paths.push(path)
    } else {
      if (node.left !== null) {
        node_queue.push(node.left)
        path_queue.push(path + '->' + node.left.val.toString())
      }

      if (node.right !== null) {
        node_queue.push(node.right)
        path_queue.push(path + '->' + node.right.val.toString())
      }
    }
  }
  return paths
}
// @lc code=end

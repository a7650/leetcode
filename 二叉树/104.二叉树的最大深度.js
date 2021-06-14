/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * BFS
 */
// var maxDepth = function (root) {
//   let depth = 0
//   if (!root) return depth
//   const queue = [root]
//   while (queue.length) {
//     depth++
//     for (let i = 0, len = queue.length; i < len; i++) {
//       const cur = queue.shift()
//       cur.left && queue.push(cur.left)
//       cur.right && queue.push(cur.right)
//     }
//   }
//   return depth
// }

// DFS
var maxDepth = function (root) {
  const dfs = (node) => {
    if (!node) return 0
    const l = dfs(node.left)
    const r = dfs(node.right)
    return Math.max(l, r) + 1
  }
  return dfs(root)
}
// @lc code=end

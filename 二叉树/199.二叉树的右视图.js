/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 * BFS
 */
// var rightSideView = function (root) {
//   if (!root) return []
//   const rst = []
//   const queue = [root]
//   while (queue.length) {
//     for (let i = queue.length; i > 0; i--) {
//       const cur = queue.shift()
//       if (i === 1) rst.push(cur.val)
//       cur.left && queue.push(cur.left)
//       cur.right && queue.push(cur.right)
//     }
//   }
//   return rst
// }

// DFS
var rightSideView = function (root) {
  if (!root) return []
  const rst = []
  const dfs = (root, depth, rst) => {
    if (rst.length === depth) rst.push(root.val)
    root.right && dfs(root.right, depth + 1, rst)
    root.left && dfs(root.left, depth + 1, rst)
  }
  dfs(root, 0, rst)
  return rst
}
// @lc code=end

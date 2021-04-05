/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root === null) {
    return []
  }
  const rst = []
  const queue = []
  queue.push(root)
  while (queue.length) {
    const len = queue.length
    const t = []
    rst.push(t)
    for (let i = 0; i < len; i++) {
      const cur = queue.shift()
      cur.val !== null && t.push(cur.val)
      cur.left !== null && queue.push(cur.left)
      cur.right !== null && queue.push(cur.right)
    }
  }
  return rst.reverse()
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  let ans = 0
  const dfs = (node) => {
    if (!node) return 0
    const l = dfs(node.left)
    const r = dfs(node.right)
    ans = Math.max(ans, l + r)
    return Math.max(l, r) + 1
  }
  return ans
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  const check = (p, q) => {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
  }
  return !root || check(root.left , root.right)
}

// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val
//   this.left = left === undefined ? null : left
//   this.right = right === undefined ? null : right
// }

// const tree = new TreeNode(1, 0)
// console.log(tree)
// console.log(isSymmetric(tree))
// @lc code=end

/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 */
var inorderTraversal = function (root) {
  const ret = []
  const stack = [root]
  while (stack.length) {
    // console.log(stack)
    const cur = stack.pop()
    if (cur) {
      if (cur instanceof TreeNode) {
        stack.push(cur.right)
        cur.val && stack.push(cur.val)
        stack.push(cur.left)
        console.log(stack)
      } else {
        ret.push(cur)
      }
    }
  }
  return ret
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  const ret = []
  if (!root) {
    return ret
  }
  const q = [root]
  while (q.length > 0) {
    const size = q.length
    const curLevel = []
    ret.push(curLevel)
    for (let i = 0; i < size; i++) {
      const cur = q.shift()
      curLevel.push(cur.val)
      cur.left && q.push(cur.left)
      cur.right && q.push(cur.right)
    }
  }
  return ret
}
// @lc code=end

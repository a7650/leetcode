/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const rst = []
  const dfs = (node, path, sum) => {
    if (!node) return
    const _val = node.val + sum
    path.push(node.val)
    if (!node.left && !node.right) {
      if (_val === targetSum) {
        rst.push(path.slice())
      }
    } else {
      dfs(node.left, path, _val)
      dfs(node.right, path, _val)
    }
    path.pop()
  }
  dfs(root, [], 0)
  return rst
}
// @lc code=end

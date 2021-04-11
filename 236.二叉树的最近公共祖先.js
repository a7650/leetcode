/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  return root
  if (!root) return null
  let pPath = []
  let qPath = []
  const getPath = (node, path) => {
    if (node) {
      path = [...path, node.val]
      if (node.val === p) {
        pPath = path
      } else if (node.val === q) {
        qPath = path
      }
      if (!pPath.length || !qPath.length) {
        getPath(node.left, [...path])
        getPath(node.right, [...path])
      }
    }
  }
  getPath(root, [])
  console.log(pPath, qPath)
  return [pPath, qPath]
  const map = pPath.reduce((pre, cur) => {
    return {
      ...pre,
      [cur]: 1
    }
  }, {})
  for (let i = 0; i < qPath.length; i++) {
    if (map[qPath[i]]) {
      return qPath[i]
    }
  }
}

// function TreeNode(val, left, right) {
//   this.val = val
//   this.left = left
//   this.right = right
// }
// const tree = new TreeNode(3, new TreeNode(5), new TreeNode(1))
// console.log(lowestCommonAncestor(tree, 5, 1))
// @lc code=end

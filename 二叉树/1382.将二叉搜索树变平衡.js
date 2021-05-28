/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 *
 * [1382] 将二叉搜索树变平衡
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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  return sortedArrayToBST(flat(root))
}
function sortedArrayToBST(nums) {
  const len = nums.length
  if (!len) return null
  const mid = Math.floor(len / 2)
  const root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1, len))
  return root
}
function flat(root) {
  const ret = []
  const dfs = (node) => {
    if (node) {
      dfs(node.left)
      node.val && ret.push(node.val)
      dfs(node.right)
    }
  }
  dfs(root)
  return ret
}
// @lc code=end

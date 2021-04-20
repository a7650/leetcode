/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  const findNodePos = (node, val) => {
    if (!node) return false
    if (node.left && node.left.val === val) {
      return {
        parent: node,
        pos: 'left'
      }
    }
    if (node.right && node.right.val === val) {
      return {
        parent: node,
        pos: 'right'
      }
    }
    return findNodePos(node.left, val) || findNodePos(node.right, val)
  }

  const findLastLeft = (node) => {
    if (!node.left) return node
    return findLastLeft(node.left)
  }

  const virtualNode = new TreeNode()
  virtualNode.left = root

  const nodePos = findNodePos(virtualNode, key)
  if (nodePos) {
    const { parent, pos } = nodePos
    const targetLeft = parent[pos].left
    const targetRight = parent[pos].right
    if (!targetLeft && !targetRight) {
      parent[pos] = null
    } else if (!targetLeft) {
      parent[pos] = targetRight
    } else if (!targetRight) {
      parent[pos] = targetLeft
    } else {
      parent[pos] = targetRight
      const lastLeft = findLastLeft(targetRight)
      lastLeft.left = targetLeft
    }
  }
  return virtualNode.left
}
// @lc code=end

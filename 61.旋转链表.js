/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if(!head || k === 0) return head
  let total = 0
  let n = 0
  let target = null
  let last = null
  let ret = null
  const dfs = (node) => {
    total++
    if (node.next) {
      dfs(node.next)
    } else {
      last = node
      k = k % total
    }
    n++
    if (k + 1 === n) {
      target = node
    } else if (k === n) {
      ret = node
    }
  }
  dfs(head)
  if(k === 0) return head
  target.next = null
  last.next = head
  return ret
}
// @lc code=end

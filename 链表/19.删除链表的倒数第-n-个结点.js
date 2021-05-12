/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let prev = null
  const host = new ListNode(0)
  host.next = head
  const getNum = (node) => {
    const _prev = prev
    prev = node
    const _n = !node.next ? 1 : getNum(node.next) + 1
    if (n === _n) {
      const _next = node.next
      _prev.next = _next
    }
    return _n
  }
  getNum(host)
  return host.next
}
// @lc code=end

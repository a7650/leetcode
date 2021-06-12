/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var merge = function (l1, l2) {
  const head = new ListNode()
  let cur = head
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }

  cur.next = l1 ? l1 : l2

  return head.next
}
const toSortList = (head) => {
  if (!head || !head.next) {
    return head
  }
  let slow = head,
    fast = head
  let pretSlow
  while (fast && fast.next) {
    pretSlow = slow
    slow = slow.next
    fast = fast.next.next
  }
  pretSlow.next = null
  return merge(toSortList(head), toSortList(slow))
}

var sortList = function (head) {
  return toSortList(head)
}
// @lc code=end

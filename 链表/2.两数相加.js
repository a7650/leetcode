/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0)
  cur = result
  let carry = 0
  while (l1 || l2) {
    let val = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + carry
    carry = 0
    if (val > 9) {
      carry = 1
      val = val % 10
    }
    cur.next = new ListNode(val)
    cur = cur.next
    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }
  if (carry) {
    cur.next = new ListNode(carry)
  }
  return result.next
}
// @lc code=end

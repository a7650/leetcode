/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var reverseList = function (head) {
  let prev = null
  let cur = head
  while (cur) {
    let next = cur.next
    cur.next = prev

    prev = cur
    cur = next
  }
  return prev
}
var isPalindrome = function (head) {
  let slowPoint = head,
    fastPoint = head
  while (fastPoint) {
    slowPoint = slowPoint.next
    fastPoint = fastPoint.next
    if (fastPoint && fastPoint.next) {
      fastPoint = fastPoint.next
    }
  }
  const node = slowPoint.next
  slowPoint.next = null
  const reversed = reverseList(node)
  slowPoint = head
  fastPoint = reversed
  while (slowPoint && fastPoint) {
    if (slowPoint.val !== fastPoint.val) {
      return false
    }
    slowPoint = slowPoint.next
    fastPoint = fastPoint.next
  }
  return true
}
// @lc code=end

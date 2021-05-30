package 链表;
import java.util.HashMap;
import java.util.Map;

/*
 * @lc app=leetcode.cn id=138 lang=java
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
  private HashMap<Node, Node> visitedNode = new HashMap<Node, Node>();

  public Node copyRandomList(Node head) {
    if (head == null)
      return null;
    if (visitedNode.containsKey(head))
      return visitedNode.get(head);
    Node node = new Node(head.val);
    this.visitedNode.put(head, node);
    node.next = this.copyRandomList(head.next);
    node.random = this.copyRandomList(head.random);
    return node;
  }
}
// @lc code=end

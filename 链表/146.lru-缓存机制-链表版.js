/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */

class LinkNode {
  constructor(key, val) {
    this.key = key
    this.value = val
    this.prev = null
    this.next = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.cache = new Map()
    this.capacity = capacity
    this.size = 0
    this.head = new LinkNode()
    this.tail = new LinkNode()
    this.head.next = this.tail
    this.tail.prev = this.head
  }
  get(key) {
    const target = this.cache.get(key)
    if (target === undefined) return -1
    this.moveToHead(target)
    return target.value
  }
  put(key, value) {
    const target = this.cache.get(key)
    if (target !== undefined) {
      target.value = value
      this.moveToHead(target)
    } else {
      const node = new LinkNode(key, value)
      if (this.size >= this.capacity) {
        const lst = this.tail.prev
        this.removeNode(lst)
        this.cache.delete(lst.key)
        this.size--
      }
      this.addToHead(node)
      this.cache.set(key, node)
      this.size++
    }
  }
  addToHead(node) {
    const next = this.head.next
    node.prev = this.head
    node.next = next
    this.head.next = node
    next.prev = node
  }
  moveToHead(node) {
    this.removeNode(node)
    this.addToHead(node)
  }
  removeNode(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }
}
const lRUCache = new LRUCache(2)
lRUCache.put(1, 1) // 缓存是 {1=1}
lRUCache.put(2, 2) // 缓存是 {1=1, 2=2}
lRUCache.get(1) // 返回 1
lRUCache.put(3, 3)
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

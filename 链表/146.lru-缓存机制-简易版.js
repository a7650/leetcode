/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = []
  this.capacity = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const idx = this.cache.findIndex((i) => i.key === key)
  let ret = -1
  if (idx > -1) {
    const target = this.cache.splice(idx, 1)[0]
    this.cache.unshift(target)
    ret = target.value
  }
  return ret
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const idx = this.cache.findIndex((i) => i.key === key)
  if (idx > -1) {
    // this.cache[idx].value = value
    this.cache.splice(idx, 1)
  } else {
    if (this.cache.length >= this.capacity) {
      this.cache.pop()
    }
  }
  this.cache.unshift({ key, value })
}

const lRUCache = new LRUCache(2)
lRUCache.put(2, 1) // 缓存是 {1=1}
lRUCache.put(2, 2) // 缓存是 {1=1, 2=2}
console.log(lRUCache.cache)
console.log(lRUCache.get(2))
console.log(lRUCache.cache)
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

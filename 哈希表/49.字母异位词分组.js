/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()
  const ret = []
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    const _str = str.split('').sort().join()
    let idx = map.get(_str)
    if (idx === void 0) {
      idx = ret.length
      ret[idx] = []
      map.set(_str, idx)
    }
    ret[idx].push(str)
  }
  return ret
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
// @lc code=end

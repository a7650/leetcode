/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let len = s.length,
    rLen = t.length,
    i = 0,
    j = -1,
    ret = '',
    minStr = Infinity
  const targetMap = makeCountMap(t)
  const sMap = makeCountMap('')
  // let falg = false
  while (i <= len - rLen && j < len) {
    if (!isAnagrams(sMap, targetMap)) {
      addCountToMap(sMap, s[++j])
    } else {
      const str = s[i]
      reduceCountToMap(sMap, str)
      i++
      // if (!targetMap[str]) {
      //   ret = s.slice(i, j + 1)
      //   minStr = j - i + 1
      //   falg = true
      //   continue
      // } else {
      //   falg = false
      // }
    }

    if (j - i + 1 < minStr && isAnagrams(sMap, targetMap)) {
      ret = s.slice(i, j + 1)
      minStr = j - i + 1
    }
  }
  return ret
}

let isAnagrams = function (windowMap, targetMap) {
  let targetKeys = Object.keys(targetMap)
  for (let targetKey of targetKeys) {
    if (!windowMap[targetKey] || windowMap[targetKey] < targetMap[targetKey]) {
      return false
    }
  }
  return true
}

function addCountToMap(map, str) {
  if (!map[str]) {
    map[str] = 1
  } else {
    map[str]++
  }
}

function reduceCountToMap(map, str) {
  if (map[str]) {
    map[str]--
  }
}

function makeCountMap(strs) {
  let map = {}
  for (let i = 0; i < strs.length; i++) {
    let letter = strs[i]
    addCountToMap(map, letter)
  }
  return map
}

// console.log(minWindow('cabwefgewcwaefgcf', 'cae'))
// @lc code=end

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const ret = []
  const n = s.length
  const dfs = (str, str2 = '') => {
    if (str.length === n) {
      ret.push(str)
      return
    }
    for (let i = 0; i < str2.length; i++) {
      if (str2.indexOf(str2[i]) !== i) continue
      dfs(str + str2[i], str2.slice(0, i) + str2.slice(i + 1))
    }
  }
  dfs('', s)
  return ret
}

console.log(permutation('abc'))

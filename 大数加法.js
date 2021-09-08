function solve(s, t) {
  let tmp = 0
  let idx1 = s.length - 1
  let idx2 = t.length - 1
  let ret = ''
  while (s[idx1] || t[idx2]) {
    const v1 = Number(s[idx1]) || 0
    const v2 = Number(t[idx2]) || 0
    let val = v1 + v2 + tmp
    tmp = Math.floor(val / 10)
    val %= val
    ret = val + ret
    idx1--
    idx2--
  }
  if (tmp) {
    ret = tmp + ret
  }
  return ret
}

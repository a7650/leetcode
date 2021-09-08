export function getLongestPalindrome(a: string, n: number): number {
  if (n === 1) return 1
  let max = 1
  const dp = Array(n).fill(null).map(() => Array(n))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < length; j++) {
      if (a[i] === a[j] && ((j - i < 3) || dp[i + 1][j - 1])) {
        dp[i][j] = true
        max = Math.max(max, j - i + 1)
      }
    }
  }
  return max
}
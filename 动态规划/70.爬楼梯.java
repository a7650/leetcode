/*
 * @lc app=leetcode.cn id=70 lang=java
 *
 * [70] 爬楼梯
 */

// @lc code=start
class Solution {
  public int climbStairs(int n) {
    int a = 0, b = 0, c = 1;
    for (int i = 0; i < n; i++) {
      a = b;
      b = c;
      c = a + b;
    }
    return c;
  }
}
// @lc code=end

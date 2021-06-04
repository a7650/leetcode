package 动态规划;
/*
 * @lc app=leetcode.cn id=121 lang=java
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
class Solution {
  public int maxProfit(int[] prices) {
    if (prices.length == 0)
      return 0;
    int minPrice = Integer.MAX_VALUE;
    int maxMargin = 0;
    for (int price : prices) {
      if (price < minPrice) {
        minPrice = price;
      }
      maxMargin = Math.max(maxMargin, price - minPrice);
    }
    return maxMargin;
  }
}
// @lc code=end

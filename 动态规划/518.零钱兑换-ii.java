package 动态规划;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

/*
 * @lc app=leetcode.cn id=518 lang=java
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
class Solution {
  public int change(int amount, int[] coins) {
    int[] dp = new int[amount + 1];
    dp[0] = 1;

    for (int j = 0; j < coins.length; j++) {
      for (int i = 1; i <= amount; i++) {
        int coin = coins[j];
        if (coin <= i) {
          dp[i] += dp[i - coin];
        }
      }
    }
    return dp[amount];
  }
}
// @lc code=end

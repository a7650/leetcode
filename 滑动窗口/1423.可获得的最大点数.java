package 滑动窗口;
import java.util.Arrays;

/*
 * @lc app=leetcode.cn id=1423 lang=java
 *
 * [1423] 可获得的最大点数
 */

// @lc code=start
class Solution {
  public int maxScore(int[] cardPoints, int k) {
    int n = cardPoints.length;
    int windowSize = n - k;
    int sum = 0;
    for (int i = 0; i < windowSize; ++i) {
      sum += cardPoints[i];
    }
    int minSum = sum;
    for (int i = windowSize; i < n; ++i) {
      sum += cardPoints[i] - cardPoints[i - windowSize];
      minSum = Math.min(minSum, sum);
    }
    return Arrays.stream(cardPoints).sum() - minSum;
  }
}
// @lc code=end

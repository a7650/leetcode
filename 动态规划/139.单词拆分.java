import java.util.HashSet;
import java.util.List;

/*
 * @lc app=leetcode.cn id=139 lang=java
 *
 * [139] 单词拆分
 */

// @lc code=start
class Solution {
  public boolean wordBreak(String s, List<String> wordDict) {
    // Set<String> wordDictSet = new HashSet<String>(wordDict);
    Set<String> wordDictSet = new HashSet<String>(wordDict);
    boolean[] dp = new boolean[s.length() + 1];
    dp[0] = true;
    for (int i = 1; i <= s.length(); i++) {
      for (int j = 0; j < i; j++) {
        if (dp[j] && wordDict.contains(s.substring(j, i))) {
          dp[i] = true;
          break;
        }
      }
    }
    return dp[s.length()];
  }
}
// @lc code=end

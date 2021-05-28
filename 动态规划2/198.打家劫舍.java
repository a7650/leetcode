/*
 * @lc app=leetcode.cn id=198 lang=java
 *
 * [198] 打家劫舍
 */

// @lc code=start
class Solution {
    public int rob(int[] nums) {
      int len = nums.length;
      if(len == 0)return 0;
      if(len == 1)return nums[0];
      int f1 = nums[0];
      int f2 = Math.max(nums[0] , nums[1]);
      for(int i = 2; i < len; i++){
        int old_f1 = f1;
        f1 = f2;
        f2 = Math.max(f2, old_f1 + nums[i]);
      }
      return f2;
    }
}
// @lc code=end


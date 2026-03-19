public class Strobogrammatic_Number_III {

    public static void main(String[] args) {
        Strobogrammatic_Number_III out = new Strobogrammatic_Number_III();
        Solution s = out.new Solution();
        System.out.println(s.strobogrammaticInRange("50", "100"));
    }


    public class Solution {

        int res = 0;

        public int strobogrammaticInRange(String low, String high) {

            if (low == null || high == null) {
                return res;
            }

            for (int i = low.length(); i <= high.length(); ++i) {
                dfs(low, high, "", i);
                dfs(low, high, "0", i);
                dfs(low, high, "1", i);
                dfs(low, high, "8", i);
            }
            return res;
        }

        void dfs(String low, String high, String path, int len) {
            if (path.length() >= len) {

                if (path.length() != len || (len != 1 && path.charAt(0) == '0')) {
                    return;
                }

                if ((len == low.length() && path.compareTo(low) < 0) || (len == high.length() && path.compareTo(high) > 0)) {
                    return;
                }

                ++res;
            }

            dfs(low, high, "0" + path + "0", len);
            dfs(low, high, "1" + path + "1", len);
            dfs(low, high, "6" + path + "9", len);
            dfs(low, high, "8" + path + "8", len);
            dfs(low, high, "9" + path + "6", len);
        }
    }
}

############

class Solution {
    private static final int[][] PAIRS = { {1, 1}, {8, 8}, {6, 9}, {9, 6}};
    private int n;

    public int strobogrammaticInRange(String low, String high) {
        int a = low.length(), b = high.length();
        long l = Long.parseLong(low), r = Long.parseLong(high);
        int ans = 0;
        for (n = a; n <= b; ++n) {
            for (String s : dfs(n)) {
                long v = Long.parseLong(s);
                if (l <= v && v <= r) {
                    ++ans;
                }
            }
        }
        return ans;
    }

    private List<String> dfs(int u) {
        if (u == 0) {
            return Collections.singletonList("");
        }
        if (u == 1) {
            return Arrays.asList("0", "1", "8");
        }
        List<String> ans = new ArrayList<>();
        for (String v : dfs(u - 2)) {
            for (var p : PAIRS) {
                ans.add(p[0] + v + p[1]);
            }
            if (u != n) {
                ans.add(0 + v + 0);
            }
        }
        return ans;
    }
}

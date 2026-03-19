import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Strobogrammatic_Number_II {

    public static void main(String[] args) {
        Strobogrammatic_Number_II out = new Strobogrammatic_Number_II();
        Solution s = out.new Solution();

        System.out.println(s.findStrobogrammatic(2));
    }

    class Solution {

        List<String> singleDigitList = new ArrayList<>(Arrays.asList("0", "1", "8")); // not char[], because List can direct return as result
        char[][] digitPair = { {'1', '1'}, {'8', '8'}, {'6', '9'}, {'9', '6'} }; // except '0', a special case

        public List<String> findStrobogrammatic(int n) {
            return dfs(n, n);
        }

        public List<String> dfs(int k, int n) {
            if (k <= 0) {
                return new ArrayList<String>(Arrays.asList(""));
            }
            if (k == 1) {
                return singleDigitList;
            }

            List<String> subList = dfs(k - 2, n);
            List<String> result = new ArrayList<>();

            for (String str : subList) {
                if (k != n) { // @note: cannot start with 0
                    result.add("0" + str + "0");
                }
                for (char[] aDigitPair : digitPair) {
                    result.add(aDigitPair[0] + str + aDigitPair[1]);
                }
            }

            return result;
        }
    }

}

############

class Solution {
    private static final int[][] PAIRS = { {1, 1}, {8, 8}, {6, 9}, {9, 6}};
    private int n;

    public List<String> findStrobogrammatic(int n) {
        this.n = n;
        return dfs(n);
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

public class Shortest_Palindrome {


    public class Solution {
        public String shortestPalindrome(String s) {

            if (s == null || s.length() == 0) {
                return "";
            }

            int i = 0, n = s.length();
            for (int j = n - 1; j >= 0; --j) { // @note: j will cross i, eg. making i=2 for "adcba"
                if (s.charAt(i) == s.charAt(j)) {
                    ++i;
                }
            }
            // now [0, i) is a possible palindrome, but need extra check
            if (i == n) {
                return s;
            }

            String remaining = s.substring(i); // need to add reverse part of it
            String rem_rev = new StringBuilder(remaining).reverse().toString();
            return rem_rev + shortestPalindrome(s.substring(0, i)) + remaining;

        }
    }
}

############

class Solution {
    public String shortestPalindrome(String s) {
        int base = 131;
        int mul = 1;
        int mod = (int) 1e9 + 7;
        int prefix = 0, suffix = 0;
        int idx = 0;
        int n = s.length();
        for (int i = 0; i < n; ++i) {
            int t = s.charAt(i) - 'a' + 1;
            prefix = (int) (((long) prefix * base + t) % mod);
            suffix = (int) ((suffix + (long) t * mul) % mod);
            mul = (int) (((long) mul * base) % mod);
            if (prefix == suffix) {
                idx = i + 1;
            }
        }
        if (idx == n) {
            return s;
        }
        return new StringBuilder(s.substring(idx)).reverse().toString() + s;
    }
}

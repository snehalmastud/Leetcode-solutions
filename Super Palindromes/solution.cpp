class Solution {
    long getPalindrome(long half, bool odd) {
        long ans = half;
        if (odd) half /= 10;
        for (; half; half /= 10) ans = ans * 10 + half % 10;
        return ans;
    }
    bool isPalindrome(long n) {
        long tmp = n, r = 0;
        for (; tmp; tmp /= 10) r = r * 10 + tmp % 10;
        return r == n;
    }
public:
    int superpalindromesInRange(string left, string right) {
        long L = stoll(left), R = stoll(right), ans = 0;
        for (int len = 1; true; ++len) {
            for (long half = pow(10L, (len - 1) / 2), end = half * 10; half < end; ++half) {
                long pal = getPalindrome(half, len % 2), sq = pal * pal;
                if (sq < L) continue;
                if (sq > R) return ans;
                ans += isPalindrome(sq);
            }
        }
        return 0;
    }
};

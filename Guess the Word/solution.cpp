class Solution {
    int countSame(string &a, string &b) {
        int cnt = 0;
        for (int i = 0; i < 6; ++i) cnt += a[i] == b[i];
        return cnt;
    }
public:
    void findSecretWord(vector<string>& A, Master& master) {
        int N = A.size();
        while (true) {
            string w = A[rand() % N];
            int cnt = master.guess(w), len = 0;
            if (cnt == 6) break;
            for (int i = 0; i < N; ++i) {
                if (countSame(A[i], w) == cnt) swap(A[i], A[len++]);
            }
            N = len;
        }
    }
};

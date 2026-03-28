struct Number {
    string prefix, repeat;
    Number(string p, string r) : prefix(p), repeat(r) {
        int N = r.size(), len = 1; // find the minimal repeat part
        for (; len <= N / 2; ++len) { 
            int i = 0;
            while (i < N && repeat[i] == repeat[i % len]) ++i;
            if (i == N) break;
        }
        if (len <= N / 2) repeat = repeat.substr(0, len);
        if (repeat == "0") repeat = "";
        normalizePrefix();
    }
    void normalizePrefix() {
        if (prefix.find_first_of(".") == string::npos) {
            prefix += '.';
        } else if (repeat.empty()) { // only pop trailing zeroes if repeat is empty
            while (prefix.back() == '0') prefix.pop_back();
        }
    }
};
class Solution {
    string increment(string &s) {
        int i = s.size() - 1, carry = 1;
        for (; i >= 0 && carry; --i) {
            if (s[i] == '.') continue;
            carry += s[i] - '0';
            s[i] = '0' + carry % 10;
            carry /= 10;
        }
        if (carry) s.insert(begin(s), '1');
        return s;
    }
    Number getNumber(string &s) {
        auto i = s.find_first_of("(");
        if (i == string::npos) return Number(s, "");
        auto ans = Number(s.substr(0, i), s.substr(i + 1, s.size() - i - 2));
        if (ans.repeat == "9") {
            ans.repeat = "";
            ans.prefix = increment(ans.prefix);
            ans.normalizePrefix();
        }
        return ans;
    }
public:
    bool isRationalEqual(string s, string t) {
        auto a = getNumber(s), b = getNumber(t);
        if (a.repeat.size() != b.repeat.size()) return false;
        if (a.repeat.size() == 0) return a.prefix == b.prefix;
        if (a.prefix.size() > b.prefix.size()) swap(a, b);
        int i = 0, N = b.prefix.size();
        for (; i < N; ++i) {
            if (i < a.prefix.size()) {
                if (a.prefix[i] != b.prefix[i]) return false;
            } else {
                if (a.repeat[(i - a.prefix.size()) % a.repeat.size()] != b.prefix[i]) return false;
            }
        }
        i = (i - a.prefix.size()) % a.repeat.size();
        return a.repeat.substr(i) + a.repeat.substr(0, i) == b.repeat;
    }
};

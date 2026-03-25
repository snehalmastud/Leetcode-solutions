class Solution {
    stack<long> num;
    stack<char> op;
    unordered_map<char, int> priority{ {'+', 1}, {'-', 1}, {'*', 2}, {'/', 2} };
    void eval() {
        long b = num.top(); num.pop();
        char c = op.top(); op.pop();
        switch (c) {
            case '+': num.top() += b; break;
            case '-': num.top() -= b; break;
            case '*': num.top() *= b; break;
            case '/': num.top() /= b; break;
        }
    }
public:
    int calculate(string s) {
        for (int i = 0, N = s.size(); i < N; ++i) {
            if (s[i] == ' ') continue;
            if (isdigit(s[i])) {
                long n = 0;
                while (i < N && isdigit(s[i])) n = n * 10 + s[i++] - '0';
                --i;
                num.push(n);
            } else if (s[i] == '(') op.push(s[i]);
            else if (s[i] == ')') {
                while (op.top() != '(') eval();
                op.pop();
            } else {
                while (op.size() && op.top() != '(' && priority[op.top()] >= priority[s[i]]) eval();
                op.push(s[i]);
            }
        }
        while (op.size()) eval();
        return num.top();
    }
};

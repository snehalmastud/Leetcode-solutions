function deserialize(s: string): NestedInteger {
    if (s[0] !== '[') {
        return new NestedInteger(+s);
    }
    const stk: NestedInteger[] = [];
    let x = 0;
    let neg = false;
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === '-') {
            neg = true;
        } else if (s[i] === '[') {
            stk.push(new NestedInteger());
        } else if (s[i] >= '0' && s[i] <= '9') {
            x = x * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0);
        } else if (s[i] === ',' || s[i] === ']') {
            if (s[i - 1] >= '0' && s[i - 1] <= '9') {
                stk[stk.length - 1].add(new NestedInteger(neg ? -x : x));
            }
            x = 0;
            neg = false;
            if (s[i] === ']' && stk.length > 1) {
                const t = stk.pop()!;
                stk[stk.length - 1].add(t);
            }
        }
    }
    return stk[0];
}

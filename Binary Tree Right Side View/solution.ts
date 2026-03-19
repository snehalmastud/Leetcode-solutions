function rightSideView(root: TreeNode | null): number[] {
    const ans = [];
    if (!root) {
        return ans;
    }
    const q = [root];
    while (q.length) {
        const n = q.length;
        ans.push(q[n - 1].val);
        for (let i = 0; i < n; ++i) {
            const { left, right } = q.shift();
            left && q.push(left);
            right && q.push(right);
        }
    }
    return ans;
}

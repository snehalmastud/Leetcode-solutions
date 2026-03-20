function findFrequentTreeSum(root: TreeNode | null): number[] {
    const map = new Map<number, number>();
    let max = 0;
    const dfs = (root: TreeNode | null) => {
        if (root == null) {
            return 0;
        }
        const { val, left, right } = root;
        const sum = val + dfs(left) + dfs(right);
        map.set(sum, (map.get(sum) ?? 0) + 1);
        max = Math.max(max, map.get(sum));
        return sum;
    };
    dfs(root);
    const res = [];
    for (const [k, v] of map) {
        if (v === max) {
            res.push(k);
        }
    }
    return res;
}

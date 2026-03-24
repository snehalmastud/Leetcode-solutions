function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
    const map = new Map<string, number>();
    const res = [];
    const dfs = (root: TreeNode | null) => {
        if (root == null) {
            return '#';
        }
        const { val, left, right } = root;
        const s = `${val},${dfs(left)},${dfs(right)}`;
        map.set(s, (map.get(s) ?? 0) + 1);
        if (map.get(s) === 2) {
            res.push(root);
        }
        return s;
    };
    dfs(root);
    return res;
}

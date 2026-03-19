function kthSmallest(root: TreeNode | null, k: number): number {
    const dfs = (root: TreeNode | null) => {
        if (root == null) {
            return -1;
        }
        const { val, left, right } = root;
        const l = dfs(left);
        if (l !== -1) {
            return l;
        }
        k--;
        if (k === 0) {
            return val;
        }
        return dfs(right);
    };
    return dfs(root);
}

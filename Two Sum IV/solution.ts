function findTarget(root: TreeNode | null, k: number): boolean {
    const dfs = (root: TreeNode | null) => {
        if (!root) {
            return false;
        }
        if (vis.has(k - root.val)) {
            return true;
        }
        vis.add(root.val);
        return dfs(root.left) || dfs(root.right);
    };
    const vis = new Set<number>();
    return dfs(root);
}

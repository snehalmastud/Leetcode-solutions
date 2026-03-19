function isBalanced(root: TreeNode | null): boolean {
    const dfs = (root: TreeNode | null) => {
        if (root == null) {
            return 0;
        }
        const left = dfs(root.left);
        const right = dfs(root.right);
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1;
        }
        return 1 + Math.max(left, right);
    };
    return dfs(root) > -1;
}

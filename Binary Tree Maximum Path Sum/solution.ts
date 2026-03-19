function maxPathSum(root: TreeNode | null): number {
    let ans = -1001;
    const dfs = (root: TreeNode | null): number => {
        if (!root) {
            return 0;
        }
        const left = Math.max(0, dfs(root.left));
        const right = Math.max(0, dfs(root.right));
        ans = Math.max(ans, left + right + root.val);
        return Math.max(left, right) + root.val;
    };
    dfs(root);
    return ans;
}

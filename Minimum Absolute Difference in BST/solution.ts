function getMinimumDifference(root: TreeNode | null): number {
    if (!root) return 0;

    let prev = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    const dfs = (node: TreeNode | null) => {
        if (!node) return;

        dfs(node.left);
        min = Math.min(min, node.val - prev);
        prev = node.val;
        dfs(node.right);
    };

    dfs(root);

    return min;
}

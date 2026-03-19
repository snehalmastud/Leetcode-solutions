function rob(root: TreeNode | null): number {
    const dfs = (root: TreeNode | null): [number, number] => {
        if (!root) {
            return [0, 0];
        }
        const [la, lb] = dfs(root.left);
        const [ra, rb] = dfs(root.right);
        return [root.val + lb + rb, Math.max(la, lb) + Math.max(ra, rb)];
    };
    return Math.max(...dfs(root));
}

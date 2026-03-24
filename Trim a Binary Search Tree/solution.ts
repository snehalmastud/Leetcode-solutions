function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    const dfs = (root: TreeNode | null) => {
        if (root == null) {
            return root;
        }
        const { val, left, right } = root;
        if (val < low || val > high) {
            return dfs(left) || dfs(right);
        }
        root.left = dfs(left);
        root.right = dfs(right);
        return root;
    };
    return dfs(root);
}

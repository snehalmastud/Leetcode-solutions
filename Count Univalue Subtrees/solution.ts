function countUnivalSubtrees(root: TreeNode | null): number {
    let ans: number = 0;
    const dfs = (root: TreeNode | null): boolean => {
        if (root == null) {
            return true;
        }
        const l: boolean = dfs(root.left);
        const r: boolean = dfs(root.right);
        if (!l || !r) {
            return false;
        }
        if (root.left != null && root.left.val != root.val) {
            return false;
        }
        if (root.right != null && root.right.val != root.val) {
            return false;
        }
        ++ans;
        return true;
    };
    dfs(root);
    return ans;
}

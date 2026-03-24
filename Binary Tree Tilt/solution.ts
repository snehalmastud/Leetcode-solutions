function findTilt(root: TreeNode | null): number {
    let ans: number = 0;
    const dfs = (root: TreeNode | null): number => {
        if (!root) {
            return 0;
        }
        const [l, r] = [dfs(root.left), dfs(root.right)];
        ans += Math.abs(l - r);
        return l + r + root.val;
    };
    dfs(root);
    return ans;
}

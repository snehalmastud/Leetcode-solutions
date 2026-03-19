function findLeaves(root: TreeNode | null): number[][] {
    const ans: number[][] = [];
    const dfs = (root: TreeNode | null): number => {
        if (root === null) {
            return 0;
        }
        const l = dfs(root.left);
        const r = dfs(root.right);
        const h = Math.max(l, r);
        if (ans.length === h) {
            ans.push([]);
        }
        ans[h].push(root.val);
        return h + 1;
    };
    dfs(root);
    return ans;
}

function binaryTreePaths(root: TreeNode | null): string[] {
    const ans: string[] = [];
    const t: number[] = [];
    const dfs = (root: TreeNode | null) => {
        if (!root) {
            return;
        }
        t.push(root.val);
        if (!root.left && !root.right) {
            ans.push(t.join('->'));
        } else {
            dfs(root.left);
            dfs(root.right);
        }
        t.pop();
    };
    dfs(root);
    return ans;
}

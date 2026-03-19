const dfs = (root: TreeNode | null, isLeft: boolean) => {
    if (!root) {
        return 0;
    }
    const { val, left, right } = root;
    if (!left && !right) {
        if (isLeft) {
            return val;
        }
        return 0;
    }
    return dfs(left, true) + dfs(right, false);
};

function sumOfLeftLeaves(root: TreeNode | null): number {
    return dfs(root, false);
}

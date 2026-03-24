const dfs = (root: TreeNode | null, subRoot: TreeNode | null) => {
    if (root == null && subRoot == null) {
        return true;
    }
    if (root == null || subRoot == null || root.val !== subRoot.val) {
        return false;
    }
    return dfs(root.left, subRoot.left) && dfs(root.right, subRoot.right);
};

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (root == null) {
        return false;
    }
    return dfs(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
): TreeNode | null {
    const find = (root: TreeNode | null) => {
        if (root == null || root == p || root == q) {
            return root;
        }
        const left = find(root.left);
        const right = find(root.right);
        if (left != null && right != null) {
            return root;
        }
        if (left != null) {
            return left;
        }
        return right;
    };
    return find(root);
}

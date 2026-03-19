function minDepth(root: TreeNode | null): number {
    if (root == null) {
        return 0;
    }
    const { left, right } = root;
    if (left == null) {
        return 1 + minDepth(right);
    }
    if (right == null) {
        return 1 + minDepth(left);
    }
    return 1 + Math.min(minDepth(left), minDepth(right));
}

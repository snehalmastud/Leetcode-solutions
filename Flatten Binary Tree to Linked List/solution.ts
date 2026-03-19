function flatten(root: TreeNode | null): void {
    while (root !== null) {
        if (root.left !== null) {
            let pre = root.left;
            while (pre.right !== null) {
                pre = pre.right;
            }
            pre.right = root.right;
            root.right = root.left;
            root.left = null;
        }
        root = root.right;
    }
}

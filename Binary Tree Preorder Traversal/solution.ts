function preorderTraversal(root: TreeNode | null): number[] {
    let ans = [];
    while (root) {
        if (!root.left) {
            ans.push(root.val);
            root = root.right;
        } else {
            let prev = root.left;
            while (prev.right && prev.right != root) {
                prev = prev.right;
            }
            if (!prev.right) {
                ans.push(root.val);
                prev.right = root;
                root = root.left;
            } else {
                prev.right = null;
                root = root.right;
            }
        }
    }
    return ans;
}

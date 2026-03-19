function postorderTraversal(root: TreeNode | null): number[] {
    if (root == null) return [];
    let stack = [];
    let ans = [];
    let prev = null;
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (!root.right || root.right == prev) {
            ans.push(root.val);
            prev = root;
            root = null;
        } else {
            stack.push(root);
            root = root.right;
        }
    }
    return ans;
}

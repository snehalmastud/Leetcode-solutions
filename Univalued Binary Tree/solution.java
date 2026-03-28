class Solution {
    public boolean isUnivalTree(TreeNode root) {
        return dfs(root, root.val);
    }

    private boolean dfs(TreeNode root, int val) {
        if (root == null) {
            return true;
        }
        return root.val == val && dfs(root.left, val) && dfs(root.right, val);
    }
}

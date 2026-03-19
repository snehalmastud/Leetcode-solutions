class Solution {
public:
    int ans;

    int largestBSTSubtree(TreeNode* root) {
        ans = 0;
        dfs(root);
        return ans;
    }

    vector<int> dfs(TreeNode* root) {
        if (!root) return {INT_MAX, INT_MIN, 0};
        auto left = dfs(root->left);
        auto right = dfs(root->right);
        if (left[1] < root->val && root->val < right[0]) {
            ans = max(ans, left[2] + right[2] + 1);
            return {min(root->val, left[0]), max(root->val, right[1]), left[2] + right[2] + 1};
        }
        return {INT_MIN, INT_MAX, 0};
    }
};

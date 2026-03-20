class Solution {
public:
    TreeNode* prev;
    int mx, cnt;
    vector<int> ans;

    vector<int> findMode(TreeNode* root) {
        dfs(root);
        return ans;
    }

    void dfs(TreeNode* root) {
        if (!root) return;
        dfs(root->left);
        cnt = prev != nullptr && prev->val == root->val ? cnt + 1 : 1;
        if (cnt > mx) {
            ans.clear();
            ans.push_back(root->val);
            mx = cnt;
        } else if (cnt == mx)
            ans.push_back(root->val);
        prev = root;
        dfs(root->right);
    }
};

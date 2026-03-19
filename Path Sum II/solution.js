var pathSum = function (root, targetSum) {
    const ans = [];
    const t = [];
    function dfs(root, s) {
        if (!root) return;
        s -= root.val;
        t.push(root.val);
        if (!root.left && !root.right && s == 0) ans.push([...t]);
        dfs(root.left, s);
        dfs(root.right, s);
        t.pop();
    }
    dfs(root, targetSum);
    return ans;
};

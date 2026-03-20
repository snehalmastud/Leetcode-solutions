function findBottomLeftValue(root: TreeNode | null): number {
    let ans = 0;
    const q = [root];
    while (q.length) {
        ans = q[0].val;
        for (let i = q.length; i; --i) {
            const node = q.shift();
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
    }
    return ans;
}

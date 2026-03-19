function levelOrder(root: TreeNode | null): number[][] {
    const res = [];
    if (root == null) {
        return res;
    }
    const queue = [root];
    while (queue.length != 0) {
        const n = queue.length;
        res.push(
            new Array(n).fill(null).map(() => {
                const { val, left, right } = queue.shift();
                left && queue.push(left);
                right && queue.push(right);
                return val;
            }),
        );
    }
    return res;
}

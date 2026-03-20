function largestValues(root: TreeNode | null): number[] {
    const res: number[] = [];
    const queue: TreeNode[] = [];
    if (root) {
        queue.push(root);
    }
    while (queue.length) {
        const n = queue.length;
        let max = -Infinity;
        for (let i = 0; i < n; i++) {
            const { val, left, right } = queue.shift();
            max = Math.max(max, val);
            left && queue.push(left);
            right && queue.push(right);
        }
        res.push(max);
    }
    return res;
}

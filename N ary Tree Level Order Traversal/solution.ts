function levelOrder(root: Node | null): number[][] {
    const res = [];
    if (root == null) {
        return res;
    }
    const queue = [root];
    while (queue.length !== 0) {
        const n = queue.length;
        const vals = [];
        for (let i = 0; i < n; i++) {
            const { val, children } = queue.shift();
            vals.push(val);
            queue.push(...children);
        }
        res.push(vals);
    }
    return res;
}

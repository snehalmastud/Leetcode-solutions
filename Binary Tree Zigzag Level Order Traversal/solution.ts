function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const res = [];
    if (root == null) {
        return res;
    }
    let isDesc = false;
    const queue = [root];
    while (queue.length !== 0) {
        const arr = queue.slice().map(() => {
            const { val, left, right } = queue.shift();
            left && queue.push(left);
            right && queue.push(right);
            return val;
        });
        res.push(isDesc ? arr.reverse() : arr);
        isDesc = !isDesc;
    }
    return res;
}

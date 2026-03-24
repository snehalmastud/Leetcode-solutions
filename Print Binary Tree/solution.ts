function printTree(root: TreeNode | null): string[][] {
    const getHeight = (root: TreeNode | null, h: number) => {
        if (root == null) {
            return h - 1;
        }
        return Math.max(getHeight(root.left, h + 1), getHeight(root.right, h + 1));
    };

    const height = getHeight(root, 0);
    const m = height + 1;
    const n = 2 ** (height + 1) - 1;
    const res: string[][] = Array.from({ length: m }, () => new Array(n).fill(''));
    const dfs = (root: TreeNode | null, i: number, j: number) => {
        if (root === null) {
            return;
        }
        const { val, left, right } = root;
        res[i][j] = val + '';
        dfs(left, i + 1, j - 2 ** (height - i - 1));
        dfs(right, i + 1, j + 2 ** (height - i - 1));
    };
    dfs(root, 0, (n - 1) >>> 1);
    return res;
}

class BSTIterator {
    private stack: TreeNode[];

    constructor(root: TreeNode | null) {
        this.stack = [];
        const dfs = (root: TreeNode | null) => {
            if (root == null) {
                return;
            }
            this.stack.push(root);
            dfs(root.left);
        };
        dfs(root);
    }

    next(): number {
        const { val, right } = this.stack.pop();
        if (right) {
            let cur = right;
            while (cur != null) {
                this.stack.push(cur);
                cur = cur.left;
            }
        }
        return val;
    }

    hasNext(): boolean {
        return this.stack.length !== 0;
    }
}

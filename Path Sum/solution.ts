function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) {
        return false;
    }
    const { val, left, right } = root;
    if (left === null && right === null) {
        return targetSum - val === 0;
    }
    return hasPathSum(left, targetSum - val) || hasPathSum(right, targetSum - val);
}

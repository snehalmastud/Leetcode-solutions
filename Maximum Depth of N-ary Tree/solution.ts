function maxDepth(root: _Node | null): number {
    if (!root) {
        return 0;
    }
    return 1 + Math.max(...root.children.map(child => maxDepth(child)), 0);
}

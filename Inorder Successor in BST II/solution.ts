function inorderSuccessor(node: Node | null): Node | null {
    if (node.right) {
        node = node.right;
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    while (node.parent && node === node.parent.right) {
        node = node.parent;
    }
    return node.parent;
}

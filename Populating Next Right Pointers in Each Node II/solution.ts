function connect(root: Node | null): Node | null {
    const modify = (curr: Node | null): void => {
        if (!curr) {
            return;
        }
        next = next || curr;
        if (prev) {
            prev.next = curr;
        }
        prev = curr;
    };
    let node = root;
    let [prev, next] = [null, null];
    while (node) {
        while (node) {
            modify(node.left);
            modify(node.right);
            node = node.next;
        }
        node = next;
        [prev, next] = [null, null];
    }
    return root;
}

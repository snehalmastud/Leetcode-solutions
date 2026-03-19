 */
var countNodes = function (root) {
    const depth = root => {
        let d = 0;
        for (; root; root = root.left) {
            ++d;
        }
        return d;
    };
    if (!root) {
        return 0;
    }
    const left = depth(root.left);
    const right = depth(root.right);
    if (left == right) {
        return (1 << left) + countNodes(root.right);
    }
    return (1 << right) + countNodes(root.left);
};

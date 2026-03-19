const find = (start: ListNode | null, end: ListNode | null) => {
    let fast = start;
    let slow = start;
    while (fast !== end && fast.next !== end) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

const build = (start: ListNode | null, end: ListNode | null) => {
    if (start == end) {
        return null;
    }
    const node = find(start, end);
    return new TreeNode(node.val, build(start, node), build(node.next, end));
};

function sortedListToBST(head: ListNode | null): TreeNode | null {
    return build(head, null);
}

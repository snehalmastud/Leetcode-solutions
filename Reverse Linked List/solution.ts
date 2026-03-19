
function reverseList(head: ListNode | null): ListNode | null {
    if (head == null) {
        return head;
    }
    let pre = null;
    let cur = head;
    while (cur != null) {
        const next = cur.next;
        cur.next = pre;
        [pre, cur] = [cur, next];
    }
    return pre;
}

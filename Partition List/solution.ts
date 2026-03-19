function partition(head: ListNode | null, x: number): ListNode | null {
    const [l, r] = [new ListNode(), new ListNode()];
    let [tl, tr] = [l, r];
    for (; head; head = head.next) {
        if (head.val < x) {
            tl.next = head;
            tl = tl.next;
        } else {
            tr.next = head;
            tr = tr.next;
        }
    }
    tr.next = null;
    tl.next = r.next;
    return l.next;
}

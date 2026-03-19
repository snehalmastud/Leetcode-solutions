function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    let [a, b, c] = [head, head.next, head.next];
    while (b && b.next) {
        a.next = b.next;
        a = a.next;
        b.next = a.next;
        b = b.next;
    }
    a.next = c;
    return head;
}

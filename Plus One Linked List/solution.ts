function plusOne(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(0, head);
    let target = dummy;
    while (head) {
        if (head.val !== 9) {
            target = head;
        }
        head = head.next;
    }
    target.val++;
    for (target = target.next; target; target = target.next) {
        target.val = 0;
    }
    return dummy.val ? dummy : dummy.next;
}

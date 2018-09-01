/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    const toHead = new ListNode(0);
    toHead.next = head;

    let len = 0;
    let first = head;

    while(first !== null) {
        len++;
        first = first.next;
    }

    len -= n;
    first = toHead;

    while (len > 0) {
        len--;
        first = first.next;
    }

    first.next = first.next.next;

    return toHead.next;
};
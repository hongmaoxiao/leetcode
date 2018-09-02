/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
    const toHead = new ListNode(0);
    toHead.next = head;
    let first = toHead;

    while(first && first.next) {
        if (first.next.val === val) {
           first.next = first.next.next; 
        } else {
            first = first.next;
        }
    }

    return toHead.next;
};
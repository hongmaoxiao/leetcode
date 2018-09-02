/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
    let first = head;

    while (first && first.next) {
        if (first.val === first.next.val) {
            first.next = first.next.next;
        } else {
            first = first.next;
        }
    }
    return head;
};
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
const middleNode = (head) => {
    let first = head;
    let len = 0;

    while (first) {
        len++;
        first = first.next;
    }

    let middle = len >> 1;
    first = head;

    while (middle > 0) {
        middle--;
        const temp = first.next;
        first.next = null;
        first = temp;
    }

    return first;
};
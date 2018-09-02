/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
    if (!head || !head.next) {
        return false;
    }
    let slow = head;
    let fast = head.next;

    while(slow !== fast) {
        if (fast.next === null || fast.next.next === null) {
            return false;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
};
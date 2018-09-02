/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
    let firsta = headA;
    let firstb = headB;

    while (firsta || firstb) {
        if (firsta === firstb) {
            return firsta;
        }

        if (firsta) {
            firsta = firsta.next;
        } else {
            firsta = headB;
        }

        if (firstb) {
            firstb = firstb.next;
        } else {
            firstb = headA;
        }
    }

    return null;
};
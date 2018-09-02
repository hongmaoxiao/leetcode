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
    let first = head;
    let i = 0;
    const listObj = {};

    while (first !== null) {
        let values = Object.values(listObj);
        if (values.indexOf(first) > -1) {
            return true;
        }
        listObj[i++] = first;
        first = first.next;
    }

    return false;
};
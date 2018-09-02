/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
const numComponents = (head, G) => {
    let first = head;
    let count = 0;
    const listObj = {};

    for (let i = 0; i < G.length; i++) {
        if (!listObj[G[i]]) {
            listObj[G[i]] = 1;
        }
    }

    while (first) {
        const keys = Object.keys(listObj);
        if (keys.indexOf(first.val.toString()) > -1 && (first.next === null || keys.indexOf(first.next.val.toString()) === -1)) {
            count++;
        }
        first = first.next;
    }

    return count;
};
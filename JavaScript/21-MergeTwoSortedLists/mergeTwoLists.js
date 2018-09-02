/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    let first1 = l1;
    let first2 = l2;
    let flag = 1;

    if (first1 === null) {
        return l2;
    }

    if (first2 === null) {
        return l1;
    }

    if (first1.val > first2.val) {
        const temp = first2;
        first2 = first1;
        first1 = temp;
        flag = 2;
    }

    while (first1 !== null && first2 !== null) {
        const temp1 = first1.next;
        const temp2 = first2.next;
        if (temp1 === null) {
            while (first2 !== null) {
                let temp = first2.next;
                first1.next = first2;
                first1 = first2;
                first2 = temp;
            }
            break;
        }
        if (first1.val <= first2.val && first1.next.val >= first2.val) {
            first1.next = first2;
            first2.next = temp1;
            first1 = first2;
            first2 = temp2;
        } else {
            first1 = temp1;
        }
    }

    return flag === 1 ? l1 : l2;
};
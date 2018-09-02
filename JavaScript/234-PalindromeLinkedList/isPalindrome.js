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
const isPalindrome = (head) => {
  if (head === null || head.next === null) {
    return true;
  }

  let first = head;
  const arr = [];

  while (first !== null) {
      arr.push(first.val);
      first = first.next;
  }

  return compare(arr, 0, arr.length - 1);
};

const compare = (arr, start, end) => {
    while (start < end) {
        if (arr[start] !== arr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
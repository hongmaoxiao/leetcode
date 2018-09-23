/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
    const arr = s.split('');
    const len = arr.length;

    for (let i = 0; i < len; i += 2*k) {
        const j = Math.min(i + k - 1, len - 1);
        reverse(arr, i, j);
    }

    return arr.join('');
};

const reverse = (arr, start, end) => {
    while (start < end) {
        const temp = arr[end];
        arr[end] = arr[start];
        arr[start] = temp;
        start++;
        end--;
    }
};
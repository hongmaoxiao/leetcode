/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
    let arr = s.split(' ');

    let res = '';

    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        const rever = reverse(ele.split(''), 0, ele.length - 1);

        res = res ? `${res} ${rever}` : `${res}${rever}`;
    }

    return res;
};

const reverse = (str, start, end) => {
    while (start < end) {
        const temp = str[start];
        str[start] = str[end];
        str[end] = temp;

        start++;
        end--;
    }

    return str.join('');
};

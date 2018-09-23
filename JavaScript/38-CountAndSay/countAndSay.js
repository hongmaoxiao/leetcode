/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
    let res = '1';

    while (--n) {
        res = countNext(res);
    }

    return res;
};

const countNext = (str) => {
    let res = '';
    let repeat = 1;

    if (str.length === 1) {
        return `1${str}`;
    }

    for (let i = 1; i < str.length; i++) {
        const ele = str[i];
        
        if (ele === str[i - 1]) {
            repeat++;
        } else {
            res = `${res}${repeat}${str[i - 1]}`;
            repeat = 1;
        }
    }

    return `${res}${repeat}${str[str.length - 1]}`
};
/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = s => {
    let res = 0;
    let prev = 0;
    let cur = 1;

    for (let i = 1; i < s.length; i++) {
        if (+s[i - 1] !== +s[i]) {
            res += Math.min(prev, cur);
            prev = cur;
            cur = 1;
        } else {
            cur++;
        }      
    }

    return res + Math.min(prev, cur);
};
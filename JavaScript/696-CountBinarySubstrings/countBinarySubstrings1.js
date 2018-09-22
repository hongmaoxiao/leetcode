/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = s => {
    const groups = [];
    let t = 0;
    groups[0] = 1;

    for (let i = 1; i < s.length; i++) {
        if (+s[i - 1] === +s[i]) {
            groups[t]++;
        } else {
            groups[++t] = 1;
        }
    }

    let res = 0;
    for (let j = 0; j < groups.length - 1; j++) {
        res += Math.min(groups[j], groups[j+1]);
    }

    return res;
};
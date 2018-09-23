/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = (s) => {
    const lps = helper(s);
    const n = s.length;
    const lenn = lps[lps.length - 1];

    if (lenn && n % (n - lenn) === 0) {
        return true;
    }

    return false;
};

const helper = (s) => {
    const lps = new Array(s.length);
    lps[0] = 0;
    let i = 1;
    let len = 0;

    while (i < s.length) {
        if (s.charAt(i) === s.charAt(len)) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
};
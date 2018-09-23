/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = (s) => {
    const len = s.length;
    if (len !== 1 && s[0].repeat(len) === s) {
        return true;
    }

    let temp = 2;

    while (temp <= len / 2) {
        if (len % temp === 0 && checkRepeat(s, temp)) {
            return true;
        }
        temp++;
    }

    return false;
};

const checkRepeat = (s, temp) => {
    let times = s.length / temp;

    const str = s.substring(0, temp);

    while (times > 0) {
        if (str !== s.substring(0, temp)) {
            return false;
        }
        s = s.substring(temp);
        times--;
    }

    return true;
};
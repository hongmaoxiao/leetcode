/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str) => {
    let i = 0;
    let res = 0;
    let isNegative = false;

    while (str[i] === ' ') {
        i++;
    }

    const sign = str[i];
    if (sign === '+' || sign === '-') {
        isNegative = sign === '-';
        i++;
    }

    for (; i < str.length; i++) {
        const code = str.charCodeAt(i) - 48;
        if (code < 0 || code > 9) {
            break;
        }
        
        res *= 10;
        res += code;
    }

    if (isNegative) {
        res = -res;
    }

    return Math.max(-(2**31), Math.min(2**31 - 1, res));
};

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str) => {
    const up = Math.pow(2, 31) - 1;
    const down = -Math.pow(2, 31);

    let flag = '+';
    let res = [];
    str = str.trim();

    for (let i = 0; i < str.length; i++) {
        const el = str[i];
        if (i === 0) {
            if (!isNumber(el)) {
                if (el === '-') {
                    flag = '-';
                } else if (el === '+') {
                    flag = '+';
                } else {
                    return 0;
                }
            } else {
                res.push(el);
            }
        } else {
            if (!isNumber(el)) {
                break;
            } else {
                if (+el === 0 && res.length === 0) {
                    continue;
                } else {
                    res.push(el);
                }
            } 
        }
    }

    const len = res.length;

    if (len === 0) {
        return 0;
    }

    res = res.reduce((acc, o, i) => {
        acc += o * Math.pow(10, len - i - 1);
        return acc;
    }, 0);

    res = Number(`${flag}${res}`);
    return res > up ? up : ((res < down) ? down : res);
};

const isNumber = (s) => {
    if (s === ' ') {
        return false;
    }
    const toNumber = Number(s);
    return toNumber === toNumber;
}

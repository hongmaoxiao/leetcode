/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str) => {
    const up = Math.pow(2, 31) - 1;
    const down = -Math.pow(2, 31);

    let flag = '+';
    let res = [];
    str = str.replace(/[\s]/g,'');

    for (let i = 0; i < str.length; i++) {
        const el = str[i];
        if (i === 0) {
            if (!el.match(/\d/)) {
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
            if (!el.match(/\d/)) {
                break;
            } else {
                res.push(el);
            } 
        }
    }

    const len = res.length;

    console.log('res: ', res);

    if (len === 0 || (len > 0 && +res[0] === 0)) {
        return 0;
    }

    console.log('res next: ', res);

    res = res.reduce((acc, o, i) => {
        acc += o * Math.pow(10, len - i - 1);
        return acc;
    }, 0);

    res = Number(`${flag}${res}`);

    return res > up ? up : ((res < down) ? down : res);
};

// myAtoi("42");
// myAtoi("   -42");
// myAtoi("4193 with words");
// myAtoi("words and 987");
// myAtoi("-91283472332");
myAtoi("   +0 123");
myAtoi("  0000000000012345678");

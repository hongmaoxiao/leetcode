/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    return n2b(b2n(a) + b2n(b));
};

const n2b = (n) => {
    if (n === 0) {
        return '0';
    }
    
    let s = '';
    while (n) {
        s = `${n % 2}${s}`;
        n >>= 1;
    }
    
    return s;
};

const b2n = (b) => {
    let num = 0;
    const len = b.length;

    for (let i = 0; i < len; i++) {
        if (b[i] !== 0) {
            num += Math.pow(2, len - i - 1) * b[i];
        }
    }
    
    return num;
};
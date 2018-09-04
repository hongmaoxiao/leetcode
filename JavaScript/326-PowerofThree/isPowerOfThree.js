/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = (n) => {
    if (n === 0) {
        return false;
    }

    if (n === 1) {
        return true;
    }
    
    if (n % 3 !== 0) {
        return false;
    }

    let remain = n;

    while (remain >= 3) {
        if (remain % 3 !== 0) {
            return false;
        }
        remain = remain / 3;
    }

    return remain === 1;
};
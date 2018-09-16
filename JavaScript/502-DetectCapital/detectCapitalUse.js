/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
    const arr = word.split('');

    let first;
    let common;

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            if (isCapital(arr[i])) {
                first = 1;
            } else {
                first = 0;
            }
        } else if (i === 1) {
            if (isCapital(arr[i])) {
                common = 1;
            } else {
                common = 0;
            }
            if (first !== common && first === 0) {
                return false;
            }
        } else {
            const other = isCapital(arr[i]) ? 1 : 0;
            if (other !== common) {
                return false;
            }
        }
    }

    return true;
};

const isCapital = (() => {
    const ACode = 'A'.codePointAt();
    const ZCode = 'Z'.codePointAt();

    return str => {
        const code = str.codePointAt();
        return code >= ACode && code <= ZCode;
    }
})();
/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
    const aCode = 'a'.codePointAt();
    const zCode = 'z'.codePointAt();
    const ACode = 'A'.codePointAt();
    const ZCode = 'Z'.codePointAt();


    const arr = word.split('');

    const isAllCapital = arr.every(o => isCodeBettwen(o, ACode, ZCode));

    if (isAllCapital) {
        return true;
    }

    const isAllLowerCase = arr.every(o => isCodeBettwen(o, aCode, zCode));

    if (isAllLowerCase) {
        return true;
    }

    return isCodeBettwen(arr[0], ACode, ZCode) && arr.slice(1).every(o => isCodeBettwen(o, aCode, zCode));
};

const isCodeBettwen = (str, start, end) => {
    const code = str.codePointAt();
    return code >= start && code <= end;
};
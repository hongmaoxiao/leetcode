/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
    s = s.replace(/^\s+|\s+$/g, '');
    const arr = s.split(' ');
    return arr[arr.length - 1].length;
};
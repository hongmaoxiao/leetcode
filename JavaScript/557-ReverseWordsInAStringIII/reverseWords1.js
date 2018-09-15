/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
    const str = s.split(' ');

    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].split('').reverse().join('');
    }

    return str.join(' ');
};
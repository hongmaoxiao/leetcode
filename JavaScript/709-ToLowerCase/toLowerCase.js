/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = (str) => {
    let res = '';

    for (let i = 0; i < str.length; i++) {
        const w = str.charCodeAt(i);

        if (w >= 65 && w <= 90) {
            res += String.fromCharCode(w + 32)
        } else {
            res += str[i];
        }
    }

    return res;
};
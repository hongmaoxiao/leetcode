/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned) => {
    let toLower = paragraph.toLowerCase().split(' ');
    const obj = {};
    let max = -Infinity;
    let res = '';

    for (let i = 0; i < toLower.length; i++) {
        const ele = toLower[i].replace(/[!?',;.]$/g, '');
        
        if (!obj[ele]) {
            obj[ele] = 1;
        } else {
            obj[ele]++;
        }
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (banned.indexOf(key) === -1) {
                if (obj[key] > max) {
                    max = obj[key];
                    res = key;
                }
            }
        }
    }

    return res;
};
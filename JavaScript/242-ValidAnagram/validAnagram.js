/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    const obj = {};

    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = 1
        } else {
            obj[s[i]]++;            
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (obj[t[j]]) {
            obj[t[j]]--;
            if (obj[t[j]] === 0) {
                delete obj[t[j]];
            }
        }
    }

    return Object.keys(obj).length === 0;
};
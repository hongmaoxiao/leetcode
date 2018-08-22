/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        console.log('obj[s[i]]:', obj[s[i]]);
        if (!obj[s[i]]) {
            obj[s[i]] = i;
        } else {
            delete obj[s[i]];
        }
    }

    const values = Object.values(obj);
    console.log('values: ', values);
    return values.length > 0 ? Math.min(...values) : -1;
};

// firstUniqChar("cc");
// firstUniqChar("loveleetcode");

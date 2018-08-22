/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
          obj[s[i]] = {
            count: 1,
            index: i,
          };
        } else {
          obj[s[i]].count++;
        }
    }

    const values = Object.values(obj);
    values = values.filter(o => o.count === 1).map(o => o.index);
    return values.length > 0 ? Math.min(...values) : -1;
};
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
          obj[s[i]] = 1;
        } else {
          obj[s[i]] = 2;
        }
    }

    for (let j = 0; j < s.length; j++) {
      if (obj[s[j]] === 1) {
        return j;
      }
    }

    return -1;
};
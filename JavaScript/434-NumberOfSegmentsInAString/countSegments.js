/**
 * @param {string} s
 * @return {number}
 */
const countSegments = (s) => {
    s = s.trim();
    if (s.length === 0) {
        return 0;
    }

    let space = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        const ele = s[i];

        if (ele !== ' ') {
            space = 0;
            continue;
        } else {
            if (space === 0) {
                count++;
            }
            space++;
        }
    }

    return count + 1;
};
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    if (s.length === 1) {
        return false;
    }
    let cur = [];
    let i = 0;

    while (i < s.length) {
        const word = s[i];
        if (cur.length === 0) {
            cur[cur.length] = {
                word: word,
                left: inLeft(word)
            };
            i++;
        } else {
            const prev = cur[cur.length - 1];
            const preInLeft = prev.left;
            const curInLeft = inLeft(word);
            if (curInLeft !== preInLeft) {
                if (!checkHalf(prev.word, word)) {
                    return false;
                } else {
                    cur.length -= 1;
                    i++;
                }
            } else {
                cur[cur.length] = {
                    word: word,
                    left: inLeft(word)
                };
                i++; 
            }
        }
    }

    return res.length === 0;
};

const inLeft = (w) => {
    return ['(', '{', '['].indexOf(w) > -1;
};

const checkHalf = (l, r) => {
    switch(l) {
        case '(':
            return r === ')';

        case '{':
            return r === '}';

        case '[':
            return r === ']';

        default:
            return false;
    }
};
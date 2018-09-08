/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {
    let sArr = S.split('');
    let tArr = T.split('');
    let sback = 0;
    let tback = 0;
    let s = '';
    let t = '';

    while (sArr.length > 0 || tArr.length > 0) {
        const spop = sArr.pop();
        const tpop = tArr.pop();

        if (spop) {
            if (spop === '#') {
                sback++;
            } else {
                if (sback > 0) {
                    sback--;
                } else {
                    s += spop;
                }
            } 
        }

        if (tpop) {
            if (tpop === '#') {
                tback++;
            } else {
                if (tback > 0) {
                    tback--;
                } else {
                    t += tpop;
                }
            } 
        }
    }

    return s === t;
};
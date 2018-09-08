/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {
    let si = S.length - 1;
    let ti = T.length - 1;
    let sback = 0;
    let tback = 0;

    while (si >= 0 || ti >= 0) {
        while (si >= 0) {
            if (S[si] === '#') {
                sback++;
                si--;
            } else if (sback > 0) {
                sback--;
                si--;
            } else {
                break;
            }
        }

        while (ti >= 0) {
            if (T[ti] === '#') {
                tback++;
                ti--;
            } else if (tback > 0) {
                tback--;
                ti--;
            } else {
                break;
            }
        }

        if (si >= 0 != ti >= 0) {
            return false;
        }

        if (si >= 0 && ti >= 0 && S[si] !== T[ti]) {
            return false;
        }

        si--;
        ti--;
    }

    return true;
};
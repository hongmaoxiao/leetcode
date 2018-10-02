/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const buddyStrings = (A, B) => {
    if (A.length !== B.length || A.length === 0 || B.length === 0) {
        return false;
    }

    if (A === B) {
        let len = A.length;
        let half = len >> 1;
        
        while (half) {
            if (len % half === 0) {
                const base = A.slice(0, half);
                if (base.repeat(len / half) === A) {
                    return true;
                }
            }
            half--;
        }
        return false;
    }

    let sumA = 0;
    let sumB = 0;
    let unique = 0;

    for (let i = 0; i < A.length; i++) {
        sumA += A.charCodeAt(i);
        sumB += B.charCodeAt(i);
        if (A[i] !== B[i]) {
            unique++;
            if (unique > 2) {
                return false;
            }
        }
    }

    return sumA === sumB;
};
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {
    const strObj = {};
    let count = 0;

    for (let i = 0; i < S.length; i++) {
        if (!strObj[S[i]]) {
            strObj[S[i]] = 1;
        } else {
            strObj[S[i]]++;
        }        
    }

    for (let j = 0; j < J.length; j++) {
        count += strObj[J[j]] ? strObj[J[j]] : 0;
    }

    return count;
};
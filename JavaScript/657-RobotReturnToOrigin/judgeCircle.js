/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = (moves) => {
    const pair = {
        'U': 'D',
        'D': 'U',
        'R': 'L',
        'L': 'R',
    }

    const obj = {};

    for (let i = 0; i < moves.length; i++) {
        let ele = moves[i];
        if (!obj[pair[ele]]) {
            if (!obj[ele]) {
                obj[ele] = 1;
            } else {
                obj[ele]++;
            }
        } else {
            obj[pair[ele]]--;
            if (obj[pair[ele]] === 0) {
                delete obj[pair[ele]];
            }
        }
    }

    return Object.keys(obj).length === 0;
};
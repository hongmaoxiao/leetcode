/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = (s) => {
    let countA = 0;
    let countL = 0;

    for (let i = 0; i < s.length; i++) {
        const ele = s[i];
        if (ele === 'A') {
            countA++;
            if (countA >= 2) {
                return false;
            }

            if (countL > 0) {
                countL = 0;
            }
        }

        if (ele === 'L') {
            if (countL === 0) {
                countL++;
            } else {
                if (s[i - 1] === 'L') {
                    countL++;
                } else {
                    countL = 0;
                }
            }

            if (countL >= 3) {
               return false; 
            }
        }

        if (ele === 'P' && countL > 0) {
            countL = 0;
        }
    }

    return true;
};